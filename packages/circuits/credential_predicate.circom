pragma circom 2.0.0;

include "circomlib/circuits/comparators.circom";
include "circomlib/circuits/poseidon.circom";

/**
 * @title CredentialPredicate
 * @notice Zero-Knowledge circuit proving that an attribute (e.g. CGPA, Age) meets or exceeds a public threshold
 *         without revealing the raw attribute value or student identity.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
template CredentialPredicate() {
    // -------------------------------------------------------------------------
    // Public Inputs (known to verifier & blockchain)
    // -------------------------------------------------------------------------
    signal input issuerPubKeyHash; // Public hash of authorized issuer key
    signal input threshold;        // Required threshold (e.g. 750 for CGPA 7.50, or 18 for age)
    signal input currentTime;      // Nonce / current timestamp for freshness

    // -------------------------------------------------------------------------
    // Private Inputs (known ONLY to the credential holder)
    // -------------------------------------------------------------------------
    signal input attributeValue;   // Real secret value (e.g. 940 for 9.40 CGPA)
    signal input salt;             // Blinding salt of credential commitment
    signal input issuerSecret;     // Secret authority pre-image

    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------
    signal output credentialCommitment; // Poseidon(attributeValue, salt)
    signal output isValid;              // 1 if predicate satisfied

    // 1. Check Issuer Public Key Hash
    component issuerHasher = Poseidon(1);
    issuerHasher.inputs[0] <== issuerSecret;
    issuerHasher.out === issuerPubKeyHash;

    // 2. Compute Credential Commitment (blinded hash)
    component commitmentHasher = Poseidon(2);
    commitmentHasher.inputs[0] <== attributeValue;
    commitmentHasher.inputs[1] <== salt;
    credentialCommitment <== commitmentHasher.out;

    // 3. Predicate Constraint: attributeValue >= threshold
    // 64-bit comparator: checks if attributeValue >= threshold
    component gte = GreaterEqThan(64);
    gte.in[0] <== attributeValue;
    gte.in[1] <== threshold;

    // Force comparator result to be 1 (true)
    gte.out === 1;

    isValid <== gte.out;
}

component main {public [issuerPubKeyHash, threshold, currentTime]} = CredentialPredicate();
