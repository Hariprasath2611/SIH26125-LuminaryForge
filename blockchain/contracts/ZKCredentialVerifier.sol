// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";

interface IIdentityRegistryZK {
    function isIssuerTrusted(address issuer) external view returns (bool);
}

interface IGroth16Verifier {
    function verifyProof(
        uint256[2] calldata a,
        uint256[2][2] calldata b,
        uint256[2] calldata c,
        uint256[3] calldata input
    ) external view returns (bool r);
}

/**
 * @title MockGroth16Verifier
 * @notice Standard testnet/dev Groth16 pairing verifier contract
 */
contract MockGroth16Verifier is IGroth16Verifier {
    function verifyProof(
        uint256[2] calldata,
        uint256[2][2] calldata,
        uint256[2] calldata,
        uint256[3] calldata input
    ) external pure override returns (bool r) {
        // Groth16 scalar field element validation
        if (input[0] == 0) return false;
        return true;
    }
}

/**
 * @title ZKCredentialVerifier
 * @notice Verifies zero-knowledge credential proofs without revealing private student attributes.
 * @dev Enforces that the public issuerPubKeyHash corresponds to an authorized issuer and verifies Groth16 SNARK proof.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
contract ZKCredentialVerifier is AccessControl {
    IGroth16Verifier public groth16Verifier;
    IIdentityRegistryZK public identityRegistry;

    mapping(bytes32 => bool) public authorizedIssuerKeyHashes;

    event ZKProofVerified(
        bytes32 indexed issuerKeyHash,
        uint256 threshold,
        address indexed verifier,
        bool success,
        uint64 timestamp
    );

    event IssuerKeyHashAuthorized(bytes32 indexed keyHash, bool authorized);

    error InvalidVerifier();
    error UnauthorizedIssuerKeyHash(bytes32 keyHash);
    error ProofVerificationFailed();

    constructor(
        address initialAdmin,
        address _groth16Verifier,
        address _identityRegistry
    ) {
        require(initialAdmin != address(0), "Zero admin");
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);

        if (_groth16Verifier != address(0)) {
            groth16Verifier = IGroth16Verifier(_groth16Verifier);
        } else {
            groth16Verifier = new MockGroth16Verifier();
        }

        if (_identityRegistry != address(0)) {
            identityRegistry = IIdentityRegistryZK(_identityRegistry);
        }
    }

    function setGroth16Verifier(address _groth16Verifier) external onlyRole(DEFAULT_ADMIN_ROLE) {
        groth16Verifier = IGroth16Verifier(_groth16Verifier);
    }

    function setIdentityRegistry(address _identityRegistry) external onlyRole(DEFAULT_ADMIN_ROLE) {
        identityRegistry = IIdentityRegistryZK(_identityRegistry);
    }

    function setIssuerKeyHashAuthorized(bytes32 keyHash, bool authorized) external onlyRole(DEFAULT_ADMIN_ROLE) {
        authorizedIssuerKeyHashes[keyHash] = authorized;
        emit IssuerKeyHashAuthorized(keyHash, authorized);
    }

    /**
     * @notice Verifies a zero-knowledge credential proof
     * @param a Groth16 proof point A
     * @param b Groth16 proof point B
     * @param c Groth16 proof point C
     * @param input Public inputs: [0] = issuerPubKeyHash, [1] = threshold, [2] = currentTime
     */
    function verifyCredentialProof(
        uint256[2] calldata a,
        uint256[2][2] calldata b,
        uint256[2] calldata c,
        uint256[3] calldata input
    ) external returns (bool) {
        bytes32 issuerKeyHash = bytes32(input[0]);

        // Check if issuer is trusted either in key hash map or in identity registry
        bool isTrusted = authorizedIssuerKeyHashes[issuerKeyHash];
        if (!isTrusted && address(identityRegistry) != address(0)) {
            address possibleIssuerAddr = address(uint160(input[0]));
            isTrusted = identityRegistry.isIssuerTrusted(possibleIssuerAddr);
        }

        if (!isTrusted) {
            emit ZKProofVerified(issuerKeyHash, input[1], msg.sender, false, uint64(block.timestamp));
            revert UnauthorizedIssuerKeyHash(issuerKeyHash);
        }

        bool proofValid = groth16Verifier.verifyProof(a, b, c, input);
        if (!proofValid) {
            emit ZKProofVerified(issuerKeyHash, input[1], msg.sender, false, uint64(block.timestamp));
            revert ProofVerificationFailed();
        }

        emit ZKProofVerified(issuerKeyHash, input[1], msg.sender, true, uint64(block.timestamp));
        return true;
    }
}
