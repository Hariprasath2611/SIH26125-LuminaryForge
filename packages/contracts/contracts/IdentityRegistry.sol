// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title IdentityRegistry
 * @notice Core registry for W3C Decentralized Identifiers (DIDs), trusted issuers, and credential anchors.
 * @dev Stores only cryptographic hashes and IPFS metadata CIDs. Never stores PII on-chain.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
contract IdentityRegistry is AccessControl, Pausable, ReentrancyGuard {
    // -------------------------------------------------------------------------
    // Roles
    // -------------------------------------------------------------------------
    bytes32 public constant ISSUER_MANAGER_ROLE = keccak2KeyPair("ISSUER_MANAGER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak2KeyPair("PAUSER_ROLE");

    function keccak2KeyPair(string memory val) private pure returns (bytes32) {
        return keccak256(abi.encodePacked(val));
    }

    // -------------------------------------------------------------------------
    // Structs
    // -------------------------------------------------------------------------
    struct DIDRecord {
        bytes32 didHash;
        address controller;
        string metadataCID; // contains holder's key-wrapping public key & DID doc metadata
        uint64 registeredAt;
        uint64 updatedAt;
        bool active;
    }

    struct CredentialAnchor {
        bytes32 credentialHash;
        address issuer;
        address subject;
        uint64 issuedAt;
        uint64 expiry; // 0 = never expires
        bool revoked;
        uint64 revokedAt;
    }

    // -------------------------------------------------------------------------
    // State Variables
    // -------------------------------------------------------------------------
    mapping(bytes32 => DIDRecord) private _dids;
    mapping(address => bytes32) private _controllerToDID;
    mapping(address => bool) private _trustedIssuers;
    mapping(bytes32 => CredentialAnchor) private _credentials;

    // -------------------------------------------------------------------------
    // Custom Errors
    // -------------------------------------------------------------------------
    error ZeroAddress();
    error DIDAlreadyRegistered(bytes32 didHash);
    error DIDNotRegistered(bytes32 didHash);
    error ControllerAlreadyBound(address controller);
    error UnauthorizedController(address caller, address expectedController);
    error DIDDeactivated(bytes32 didHash);
    error IssuerAlreadyRegistered(address issuer);
    error IssuerNotRegistered(address issuer);
    error UnauthorizedIssuer(address caller);
    error CredentialAlreadyAnchored(bytes32 credentialHash);
    error CredentialNotFound(bytes32 credentialHash);
    error CredentialAlreadyRevoked(bytes32 credentialHash);
    error InvalidInput();

    // -------------------------------------------------------------------------
    // Events
    // -------------------------------------------------------------------------
    event DIDRegistered(bytes32 indexed didHash, address indexed controller, string metadataCID, uint64 timestamp);
    event DIDControllerUpdated(bytes32 indexed didHash, address indexed oldController, address indexed newController, uint64 timestamp);
    event DIDMetadataUpdated(bytes32 indexed didHash, string newMetadataCID, uint64 timestamp);
    event DIDDeactivatedEvent(bytes32 indexed didHash, uint64 timestamp);

    event IssuerAdded(address indexed issuer, address indexed addedBy, uint64 timestamp);
    event IssuerRemoved(address indexed issuer, address indexed removedBy, uint64 timestamp);

    event CredentialAnchored(
        bytes32 indexed credentialHash,
        address indexed issuer,
        address indexed subject,
        uint64 expiry,
        uint64 timestamp
    );
    event CredentialRevoked(
        bytes32 indexed credentialHash,
        address indexed revokedBy,
        uint64 timestamp
    );

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(address initialAdmin) {
        if (initialAdmin == address(0)) revert ZeroAddress();
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
        _grantRole(ISSUER_MANAGER_ROLE, initialAdmin);
        _grantRole(PAUSER_ROLE, initialAdmin);
    }

    // -------------------------------------------------------------------------
    // DID Management
    // -------------------------------------------------------------------------
    /**
     * @notice Registers a new decentralized identity (DID)
     * @param didHash keccak256 hash of the did:ethr identifier
     * @param controller Ethereum address controlling this DID
     * @param metadataCID IPFS CID of DID Document and wrapping public key
     */
    function registerDID(
        bytes32 didHash,
        address controller,
        string calldata metadataCID
    ) external whenNotPaused nonReentrant {
        if (didHash == bytes32(0)) revert InvalidInput();
        if (controller == address(0)) revert ZeroAddress();
        if (bytes(metadataCID).length == 0) revert InvalidInput();
        if (_dids[didHash].registeredAt != 0) revert DIDAlreadyRegistered(didHash);
        if (_controllerToDID[controller] != bytes32(0)) revert ControllerAlreadyBound(controller);

        // Caller must be controller or admin
        if (msg.sender != controller && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert UnauthorizedController(msg.sender, controller);
        }

        uint64 nowSec = uint64(block.timestamp);
        _dids[didHash] = DIDRecord({
            didHash: didHash,
            controller: controller,
            metadataCID: metadataCID,
            registeredAt: nowSec,
            updatedAt: nowSec,
            active: true
        });

        _controllerToDID[controller] = didHash;

        emit DIDRegistered(didHash, controller, metadataCID, nowSec);
    }

    /**
     * @notice Updates the controller address for a DID
     */
    function updateController(bytes32 didHash, address newController) external whenNotPaused nonReentrant {
        if (newController == address(0)) revert ZeroAddress();
        DIDRecord storage record = _dids[didHash];
        if (record.registeredAt == 0) revert DIDNotRegistered(didHash);
        if (!record.active) revert DIDDeactivated(didHash);
        if (msg.sender != record.controller && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert UnauthorizedController(msg.sender, record.controller);
        }
        if (_controllerToDID[newController] != bytes32(0) && _controllerToDID[newController] != didHash) {
            revert ControllerAlreadyBound(newController);
        }

        address oldController = record.controller;
        delete _controllerToDID[oldController];

        record.controller = newController;
        record.updatedAt = uint64(block.timestamp);
        _controllerToDID[newController] = didHash;

        emit DIDControllerUpdated(didHash, oldController, newController, uint64(block.timestamp));
    }

    /**
     * @notice Updates the metadata CID containing key-wrapping public keys
     */
    function updateMetadata(bytes32 didHash, string calldata newMetadataCID) external whenNotPaused nonReentrant {
        if (bytes(newMetadataCID).length == 0) revert InvalidInput();
        DIDRecord storage record = _dids[didHash];
        if (record.registeredAt == 0) revert DIDNotRegistered(didHash);
        if (!record.active) revert DIDDeactivated(didHash);
        if (msg.sender != record.controller && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert UnauthorizedController(msg.sender, record.controller);
        }

        record.metadataCID = newMetadataCID;
        record.updatedAt = uint64(block.timestamp);

        emit DIDMetadataUpdated(didHash, newMetadataCID, uint64(block.timestamp));
    }

    /**
     * @notice Deactivates a DID permanently
     */
    function deactivateDID(bytes32 didHash) external whenNotPaused nonReentrant {
        DIDRecord storage record = _dids[didHash];
        if (record.registeredAt == 0) revert DIDNotRegistered(didHash);
        if (!record.active) revert DIDDeactivated(didHash);
        if (msg.sender != record.controller && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert UnauthorizedController(msg.sender, record.controller);
        }

        record.active = false;
        record.updatedAt = uint64(block.timestamp);
        delete _controllerToDID[record.controller];

        emit DIDDeactivatedEvent(didHash, uint64(block.timestamp));
    }

    // -------------------------------------------------------------------------
    // Trusted Issuers
    // -------------------------------------------------------------------------
    function addIssuer(address issuer) external onlyRole(ISSUER_MANAGER_ROLE) {
        if (issuer == address(0)) revert ZeroAddress();
        if (_trustedIssuers[issuer]) revert IssuerAlreadyRegistered(issuer);
        _trustedIssuers[issuer] = true;
        emit IssuerAdded(issuer, msg.sender, uint64(block.timestamp));
    }

    function removeIssuer(address issuer) external onlyRole(ISSUER_MANAGER_ROLE) {
        if (!_trustedIssuers[issuer]) revert IssuerNotRegistered(issuer);
        _trustedIssuers[issuer] = false;
        emit IssuerRemoved(issuer, msg.sender, uint64(block.timestamp));
    }

    function isIssuerTrusted(address issuer) external view returns (bool) {
        return _trustedIssuers[issuer];
    }

    // -------------------------------------------------------------------------
    // Credential Anchors
    // -------------------------------------------------------------------------
    /**
     * @notice Anchors an issued verifiable credential hash on-chain
     * @param credentialHash SHA-256 or keccak256 hash of the canonical W3C credential
     * @param subject Subject holder wallet address
     * @param expiry Expiration unix timestamp (0 for no expiration)
     */
    function anchorCredential(
        bytes32 credentialHash,
        address subject,
        uint64 expiry
    ) external whenNotPaused nonReentrant {
        if (credentialHash == bytes32(0)) revert InvalidInput();
        if (subject == address(0)) revert ZeroAddress();
        if (!_trustedIssuers[msg.sender]) revert UnauthorizedIssuer(msg.sender);
        if (_credentials[credentialHash].issuedAt != 0) revert CredentialAlreadyAnchored(credentialHash);

        uint64 nowSec = uint64(block.timestamp);
        if (expiry != 0 && expiry <= nowSec) revert InvalidInput();

        _credentials[credentialHash] = CredentialAnchor({
            credentialHash: credentialHash,
            issuer: msg.sender,
            subject: subject,
            issuedAt: nowSec,
            expiry: expiry,
            revoked: false,
            revokedAt: 0
        });

        emit CredentialAnchored(credentialHash, msg.sender, subject, expiry, nowSec);
    }

    /**
     * @notice Revokes an anchored credential
     */
    function revokeCredential(bytes32 credentialHash) external whenNotPaused nonReentrant {
        CredentialAnchor storage cred = _credentials[credentialHash];
        if (cred.issuedAt == 0) revert CredentialNotFound(credentialHash);
        if (cred.revoked) revert CredentialAlreadyRevoked(credentialHash);

        // Only issuing address or contract admin can revoke
        if (msg.sender != cred.issuer && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert UnauthorizedIssuer(msg.sender);
        }

        cred.revoked = true;
        cred.revokedAt = uint64(block.timestamp);

        emit CredentialRevoked(credentialHash, msg.sender, uint64(block.timestamp));
    }

    /**
     * @notice Verifies whether a credential anchor is currently valid
     */
    function verifyCredential(bytes32 credentialHash)
        external
        view
        returns (
            bool valid,
            address issuer,
            address subject,
            uint64 expiry,
            bool revoked
        )
    {
        CredentialAnchor storage cred = _credentials[credentialHash];
        if (cred.issuedAt == 0) {
            return (false, address(0), address(0), 0, false);
        }

        bool isExpired = (cred.expiry != 0 && block.timestamp > cred.expiry);
        bool isValid = !cred.revoked && !isExpired && _trustedIssuers[cred.issuer];

        return (
            isValid,
            cred.issuer,
            cred.subject,
            cred.expiry,
            cred.revoked
        );
    }

    // -------------------------------------------------------------------------
    // View Getters
    // -------------------------------------------------------------------------
    function getDID(bytes32 didHash) external view returns (DIDRecord memory) {
        DIDRecord memory record = _dids[didHash];
        if (record.registeredAt == 0) revert DIDNotRegistered(didHash);
        return record;
    }

    function getDIDByController(address controller) external view returns (DIDRecord memory) {
        bytes32 didHash = _controllerToDID[controller];
        if (didHash == bytes32(0)) revert DIDNotRegistered(bytes32(0));
        return _dids[didHash];
    }

    function getCredentialAnchor(bytes32 credentialHash) external view returns (CredentialAnchor memory) {
        CredentialAnchor memory cred = _credentials[credentialHash];
        if (cred.issuedAt == 0) revert CredentialNotFound(credentialHash);
        return cred;
    }

    // -------------------------------------------------------------------------
    // Pausable
    // -------------------------------------------------------------------------
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }
}
