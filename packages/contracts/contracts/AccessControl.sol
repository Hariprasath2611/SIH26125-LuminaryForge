// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {AccessControl as OpenZeppelinAccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

interface IOwnershipRegistry {
    function ownerOf(bytes32 assetId) external view returns (address);
}

/**
 * @title BharosaAccessControl
 * @notice Attribute-Based Access Control (ABAC, NIST SP 800-162) engine for decentralized assets.
 * @dev Validates subject, resource, and environment attributes with cryptographic integrity and EIP-712 meta-tx support.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
contract BharosaAccessControl is OpenZeppelinAccessControl, Pausable, ReentrancyGuard, EIP712 {
    // -------------------------------------------------------------------------
    // Typehashes & Constants
    // -------------------------------------------------------------------------
    bytes32 public constant GRANT_TYPEHASH = keccak256(
        "GrantAccess(bytes32 assetId,address grantee,string role,string purpose,uint64 notBefore,uint64 expiresAt,string wrappedKeyCID,uint256 nonce,uint256 deadline)"
    );

    // -------------------------------------------------------------------------
    // Structs
    // -------------------------------------------------------------------------
    struct Grant {
        address grantee;
        string role;
        string purpose;
        uint64 notBefore;
        uint64 expiresAt;
        string wrappedKeyCID; // ECIES wrapped AES key pinned on IPFS for this grantee
        bool revoked;
        uint64 grantedAt;
        uint64 revokedAt;
    }

    struct AccessRequestRecord {
        address requester;
        string role;
        string purpose;
        uint64 requestedAt;
        bool fulfilled;
    }

    // -------------------------------------------------------------------------
    // State Variables
    // -------------------------------------------------------------------------
    IOwnershipRegistry public ownershipRegistry;

    // assetId => grantee => Grant
    mapping(bytes32 => mapping(address => Grant)) private _grants;

    // assetId => requester => AccessRequestRecord
    mapping(bytes32 => mapping(address => AccessRequestRecord)) private _requests;

    // Nonces for EIP-712 signatures: owner => nonce
    mapping(address => uint256) public nonces;

    // -------------------------------------------------------------------------
    // Custom Errors
    // -------------------------------------------------------------------------
    error ZeroAddress();
    error InvalidInput();
    error NotAssetOwner(address caller, address owner);
    error GrantNotFound(bytes32 assetId, address grantee);
    error GrantAlreadyRevoked(bytes32 assetId, address grantee);
    error SignatureExpired();
    error InvalidSignature();
    error TimeWindowInvalid(uint64 notBefore, uint64 expiresAt);

    // -------------------------------------------------------------------------
    // Events
    // -------------------------------------------------------------------------
    event AccessRequested(
        bytes32 indexed assetId,
        address indexed requester,
        string role,
        string purpose,
        uint64 timestamp
    );

    event AccessGranted(
        bytes32 indexed assetId,
        address indexed grantee,
        string role,
        string purpose,
        uint64 notBefore,
        uint64 expiresAt,
        string wrappedKeyCID,
        uint64 timestamp
    );

    event AccessRevoked(
        bytes32 indexed assetId,
        address indexed grantee,
        address indexed revokedBy,
        uint64 timestamp
    );

    event AccessUsed(
        bytes32 indexed assetId,
        address indexed grantee,
        string role,
        uint64 timestamp
    );

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(address initialAdmin, address _ownershipRegistry)
        EIP712("BharosaAccessControl", "1")
    {
        if (initialAdmin == address(0)) revert ZeroAddress();
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
        if (_ownershipRegistry != address(0)) {
            ownershipRegistry = IOwnershipRegistry(_ownershipRegistry);
        }
    }

    function setOwnershipRegistry(address _ownershipRegistry) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_ownershipRegistry == address(0)) revert ZeroAddress();
        ownershipRegistry = IOwnershipRegistry(_ownershipRegistry);
    }

    // -------------------------------------------------------------------------
    // Request Access Flow
    // -------------------------------------------------------------------------
    /**
     * @notice Verifier/Requester requests access to an asset
     */
    function requestAccess(
        bytes32 assetId,
        string calldata role,
        string calldata purpose
    ) external whenNotPaused nonReentrant {
        if (assetId == bytes32(0)) revert InvalidInput();

        _requests[assetId][msg.sender] = AccessRequestRecord({
            requester: msg.sender,
            role: role,
            purpose: purpose,
            requestedAt: uint64(block.timestamp),
            fulfilled: false
        });

        emit AccessRequested(assetId, msg.sender, role, purpose, uint64(block.timestamp));
    }

    // -------------------------------------------------------------------------
    // Grant Access Flow
    // -------------------------------------------------------------------------
    /**
     * @notice Asset owner grants ABAC time-bound access to a grantee
     */
    function grantAccess(
        bytes32 assetId,
        address grantee,
        string calldata role,
        string calldata purpose,
        uint64 notBefore,
        uint64 expiresAt,
        string calldata wrappedKeyCID
    ) external whenNotPaused nonReentrant {
        _validateAndGrant(msg.sender, assetId, grantee, role, purpose, notBefore, expiresAt, wrappedKeyCID);
    }

    /**
     * @notice Gasless grant using EIP-712 signature from the asset owner
     */
    function grantWithSig(
        address owner,
        bytes32 assetId,
        address grantee,
        string calldata role,
        string calldata purpose,
        uint64 notBefore,
        uint64 expiresAt,
        string calldata wrappedKeyCID,
        uint256 deadline,
        bytes calldata signature
    ) external whenNotPaused nonReentrant {
        if (block.timestamp > deadline) revert SignatureExpired();

        uint256 currentNonce = nonces[owner]++;
        bytes32 structHash = keccak256(
            abi.encode(
                GRANT_TYPEHASH,
                assetId,
                grantee,
                keccak256(bytes(role)),
                keccak256(bytes(purpose)),
                notBefore,
                expiresAt,
                keccak256(bytes(wrappedKeyCID)),
                currentNonce,
                deadline
            )
        );

        bytes32 digest = _hashTypedDataV4(structHash);
        if (!SignatureChecker.isValidSignatureNow(owner, digest, signature)) {
            revert InvalidSignature();
        }

        _validateAndGrant(owner, assetId, grantee, role, purpose, notBefore, expiresAt, wrappedKeyCID);
    }

    function _validateAndGrant(
        address owner,
        bytes32 assetId,
        address grantee,
        string calldata role,
        string calldata purpose,
        uint64 notBefore,
        uint64 expiresAt,
        string calldata wrappedKeyCID
    ) internal {
        if (grantee == address(0)) revert ZeroAddress();
        if (expiresAt != 0 && expiresAt <= notBefore) revert TimeWindowInvalid(notBefore, expiresAt);

        // Verify ownership
        if (address(ownershipRegistry) != address(0)) {
            address actualOwner = ownershipRegistry.ownerOf(assetId);
            if (actualOwner != owner && !hasRole(DEFAULT_ADMIN_ROLE, owner)) {
                revert NotAssetOwner(owner, actualOwner);
            }
        }

        uint64 nowSec = uint64(block.timestamp);
        _grants[assetId][grantee] = Grant({
            grantee: grantee,
            role: role,
            purpose: purpose,
            notBefore: notBefore,
            expiresAt: expiresAt,
            wrappedKeyCID: wrappedKeyCID,
            revoked: false,
            grantedAt: nowSec,
            revokedAt: 0
        });

        // Mark request fulfilled if exists
        if (_requests[assetId][grantee].requestedAt != 0) {
            _requests[assetId][grantee].fulfilled = true;
        }

        emit AccessGranted(
            assetId,
            grantee,
            role,
            purpose,
            notBefore,
            expiresAt,
            wrappedKeyCID,
            nowSec
        );
    }

    // -------------------------------------------------------------------------
    // Revocation & Audit
    // -------------------------------------------------------------------------
    /**
     * @notice Revoke access for a grantee
     */
    function revokeAccess(bytes32 assetId, address grantee) external whenNotPaused nonReentrant {
        Grant storage g = _grants[assetId][grantee];
        if (g.grantedAt == 0) revert GrantNotFound(assetId, grantee);
        if (g.revoked) revert GrantAlreadyRevoked(assetId, grantee);

        if (address(ownershipRegistry) != address(0)) {
            address actualOwner = ownershipRegistry.ownerOf(assetId);
            if (msg.sender != actualOwner && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
                revert NotAssetOwner(msg.sender, actualOwner);
            }
        }

        g.revoked = true;
        g.revokedAt = uint64(block.timestamp);

        emit AccessRevoked(assetId, grantee, msg.sender, uint64(block.timestamp));
    }

    /**
     * @notice Verifies if access is permitted based on ABAC attributes
     */
    function checkAccess(
        bytes32 assetId,
        address grantee,
        string calldata expectedRole
    ) external view returns (bool permitted, string memory wrappedKeyCID) {
        Grant storage g = _grants[assetId][grantee];
        if (g.grantedAt == 0 || g.revoked) {
            return (false, "");
        }

        uint64 nowSec = uint64(block.timestamp);
        if (g.notBefore != 0 && nowSec < g.notBefore) {
            return (false, "");
        }
        if (g.expiresAt != 0 && nowSec > g.expiresAt) {
            return (false, "");
        }

        if (bytes(expectedRole).length > 0 && keccak256(bytes(g.role)) != keccak256(bytes(expectedRole))) {
            return (false, "");
        }

        return (true, g.wrappedKeyCID);
    }

    /**
     * @notice Logs access usage for on-chain audit trail
     */
    function recordAccessUsage(bytes32 assetId, string calldata role) external whenNotPaused {
        (bool permitted, ) = this.checkAccess(assetId, msg.sender, role);
        require(permitted, "Access not permitted");

        emit AccessUsed(assetId, msg.sender, role, uint64(block.timestamp));
    }

    function getGrant(bytes32 assetId, address grantee) external view returns (Grant memory) {
        Grant memory g = _grants[assetId][grantee];
        if (g.grantedAt == 0) revert GrantNotFound(assetId, grantee);
        return g;
    }

    function getRequest(bytes32 assetId, address requester) external view returns (AccessRequestRecord memory) {
        return _requests[assetId][requester];
    }
}
