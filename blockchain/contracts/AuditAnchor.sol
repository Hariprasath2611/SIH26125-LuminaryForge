// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/**
 * @title AuditAnchor
 * @notice Stores periodic Merkle roots of off-chain security logs and access events.
 * @dev Enables tamper-evident proof that off-chain audit logs have not been modified or deleted.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
contract AuditAnchor is AccessControl {
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");

    struct Anchor {
        bytes32 merkleRoot;
        uint256 logCount;
        uint64 timestamp;
        address submitter;
        string metadataURI; // IPFS CID of summary log batch
    }

    Anchor[] private _anchors;

    event MerkleRootAnchored(
        uint256 indexed index,
        bytes32 indexed merkleRoot,
        uint256 logCount,
        address submitter,
        string metadataURI,
        uint64 timestamp
    );

    error ZeroAddress();
    error InvalidInput();
    error IndexOutOfBounds(uint256 index, uint256 total);

    constructor(address initialAdmin) {
        if (initialAdmin == address(0)) revert ZeroAddress();
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
        _grantRole(AUDITOR_ROLE, initialAdmin);
    }

    /**
     * @notice Anchors a new Merkle root of off-chain logs
     */
    function anchorMerkleRoot(
        bytes32 root,
        uint256 logCount,
        string calldata metadataURI
    ) external onlyRole(AUDITOR_ROLE) returns (uint256 index) {
        if (root == bytes32(0)) revert InvalidInput();

        index = _anchors.length;
        uint64 nowSec = uint64(block.timestamp);

        _anchors.push(Anchor({
            merkleRoot: root,
            logCount: logCount,
            timestamp: nowSec,
            submitter: msg.sender,
            metadataURI: metadataURI
        }));

        emit MerkleRootAnchored(index, root, logCount, msg.sender, metadataURI, nowSec);
    }

    /**
     * @notice Verifies whether a specific audit log leaf is part of an anchored Merkle root
     */
    function verifyLogIncluded(
        bytes32 leaf,
        bytes32[] calldata proof,
        uint256 rootIndex
    ) external view returns (bool) {
        if (rootIndex >= _anchors.length) revert IndexOutOfBounds(rootIndex, _anchors.length);
        return MerkleProof.verify(proof, _anchors[rootIndex].merkleRoot, leaf);
    }

    function getAnchor(uint256 index) external view returns (Anchor memory) {
        if (index >= _anchors.length) revert IndexOutOfBounds(index, _anchors.length);
        return _anchors[index];
    }

    function getAnchorCount() external view returns (uint256) {
        return _anchors.length;
    }

    function latestAnchor() external view returns (Anchor memory) {
        if (_anchors.length == 0) revert IndexOutOfBounds(0, 0);
        return _anchors[_anchors.length - 1];
    }
}
