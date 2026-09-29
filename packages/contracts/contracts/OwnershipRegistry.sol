// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title OwnershipRegistry
 * @notice ERC-1155 based digital asset ownership and hash integrity registry.
 * @dev Supports encrypted asset registration, transfer, soulbound credential flags, and tamper detection.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
contract OwnershipRegistry is ERC1155, AccessControl, Pausable, ReentrancyGuard {
    // -------------------------------------------------------------------------
    // Structs
    // -------------------------------------------------------------------------
    struct AssetRecord {
        bytes32 assetId;
        address owner;
        string cid; // IPFS CID of encrypted ciphertext
        bytes32 contentHash; // SHA-256 hash of original file content
        string metadataCID; // Metadata (name, MIME type, size, version)
        bool isSoulbound; // Non-transferable if true (e.g. university credentials)
        uint64 registeredAt;
        uint64 transferredAt;
    }

    // -------------------------------------------------------------------------
    // State Variables
    // -------------------------------------------------------------------------
    mapping(bytes32 => AssetRecord) private _assets;
    mapping(bytes32 => address) private _owners;

    // -------------------------------------------------------------------------
    // Custom Errors
    // -------------------------------------------------------------------------
    error ZeroAddress();
    error InvalidInput();
    error AssetAlreadyRegistered(bytes32 assetId);
    error AssetNotFound(bytes32 assetId);
    error SoulboundAssetCannotBeTransferred(bytes32 assetId);
    error NotAssetOwner(address caller, address owner);

    // -------------------------------------------------------------------------
    // Events
    // -------------------------------------------------------------------------
    event AssetRegistered(
        bytes32 indexed assetId,
        address indexed owner,
        string cid,
        bytes32 contentHash,
        string metadataCID,
        bool isSoulbound,
        uint64 timestamp
    );

    event OwnershipTransferred(
        bytes32 indexed assetId,
        address indexed previousOwner,
        address indexed newOwner,
        uint64 timestamp
    );

    event AssetHashVerified(
        bytes32 indexed assetId,
        address indexed verifier,
        bool matched,
        uint64 timestamp
    );

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(address initialAdmin) ERC1155("https://bharosa.app/api/assets/{id}.json") {
        if (initialAdmin == address(0)) revert ZeroAddress();
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
    }

    // -------------------------------------------------------------------------
    // Asset Registration
    // -------------------------------------------------------------------------
    /**
     * @notice Registers a new encrypted asset on-chain
     * @param cid IPFS CID of encrypted ciphertext
     * @param contentHash SHA-256 hash of plaintext/ciphertext for integrity check
     * @param metadataCID IPFS CID of asset metadata
     * @param isSoulbound If true, asset cannot be transferred (credential mode)
     */
    function registerAsset(
        string calldata cid,
        bytes32 contentHash,
        string calldata metadataCID,
        bool isSoulbound
    ) external whenNotPaused nonReentrant returns (bytes32 assetId) {
        if (bytes(cid).length == 0 || contentHash == bytes32(0)) revert InvalidInput();

        // Deterministic assetId based on owner, cid, contentHash and block timestamp
        assetId = keccak256(abi.encodePacked(msg.sender, cid, contentHash, block.timestamp));

        if (_assets[assetId].registeredAt != 0) revert AssetAlreadyRegistered(assetId);

        uint64 nowSec = uint64(block.timestamp);
        _assets[assetId] = AssetRecord({
            assetId: assetId,
            owner: msg.sender,
            cid: cid,
            contentHash: contentHash,
            metadataCID: metadataCID,
            isSoulbound: isSoulbound,
            registeredAt: nowSec,
            transferredAt: nowSec
        });

        _owners[assetId] = msg.sender;

        // Mint ERC1155 1-of-1 token representation
        _mint(msg.sender, uint256(assetId), 1, "");

        emit AssetRegistered(
            assetId,
            msg.sender,
            cid,
            contentHash,
            metadataCID,
            isSoulbound,
            nowSec
        );

        return assetId;
    }

    // -------------------------------------------------------------------------
    // Ownership Transfer
    // -------------------------------------------------------------------------
    /**
     * @notice Transfers ownership of an asset (reverts if soulbound)
     */
    function transferOwnership(bytes32 assetId, address to) external whenNotPaused nonReentrant {
        if (to == address(0)) revert ZeroAddress();
        AssetRecord storage asset = _assets[assetId];
        if (asset.registeredAt == 0) revert AssetNotFound(assetId);
        if (asset.isSoulbound) revert SoulboundAssetCannotBeTransferred(assetId);
        if (asset.owner != msg.sender && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert NotAssetOwner(msg.sender, asset.owner);
        }

        address prevOwner = asset.owner;
        asset.owner = to;
        asset.transferredAt = uint64(block.timestamp);
        _owners[assetId] = to;

        // Transfer ERC-1155 token
        _safeTransferFrom(prevOwner, to, uint256(assetId), 1, "");

        emit OwnershipTransferred(assetId, prevOwner, to, uint64(block.timestamp));
    }

    // -------------------------------------------------------------------------
    // Integrity Verification
    // -------------------------------------------------------------------------
    /**
     * @notice Verifies whether a supplied file content hash matches the on-chain hash
     */
    function verifyHash(bytes32 assetId, bytes32 suppliedHash)
        external
        returns (bool matched, bytes32 registeredHash)
    {
        AssetRecord storage asset = _assets[assetId];
        if (asset.registeredAt == 0) revert AssetNotFound(assetId);

        matched = (asset.contentHash == suppliedHash);
        emit AssetHashVerified(assetId, msg.sender, matched, uint64(block.timestamp));

        return (matched, asset.contentHash);
    }

    // -------------------------------------------------------------------------
    // Getters
    // -------------------------------------------------------------------------
    function ownerOf(bytes32 assetId) external view returns (address) {
        address owner = _owners[assetId];
        if (owner == address(0)) revert AssetNotFound(assetId);
        return owner;
    }

    function getAsset(bytes32 assetId) external view returns (AssetRecord memory) {
        AssetRecord memory asset = _assets[assetId];
        if (asset.registeredAt == 0) revert AssetNotFound(assetId);
        return asset;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
