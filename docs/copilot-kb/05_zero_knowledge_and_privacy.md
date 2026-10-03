# Zero-Knowledge Proofs & Privacy Architecture

## What are Zero-Knowledge Proofs (ZKPs)?
A Zero-Knowledge Proof (ZKP) is a cryptographic method where one party (the Prover) can prove to another party (the Verifier) that a specific statement is true, without revealing any additional information beyond the validity of the statement itself.

In Bharosa, ZKPs solve the fundamental paradox of digital identity: **how to verify qualifications and compliance without forfeiting personal privacy**.

---

## Practical ZKP Use Cases in Bharosa

1. **Age / Threshold Proofs**:
   - *Scenario*: Proving you are over 18 or 21 to access age-restricted services.
   - *Traditional approach*: Exposing your entire government ID containing your date of birth, home address, and government identification numbers.
   - *Bharosa ZKP*: Generating a zk-SNARK proof verifying `currentYear - birthYear >= 18` using a trusted issuer's signature. The verifier sees a cryptographic `TRUE`, with 0 personal data revealed.

2. **Income & Credit Eligibility**:
   - *Scenario*: Proving annual income meets a loan threshold.
   - *Bharosa ZKP*: Proves `income >= threshold` from an anchored tax or employment credential without disclosing exact salary or bank transactions.

3. **Geographic / Jurisdiction Residency**:
   - *Scenario*: Confirming eligibility for local state grants (e.g., resident of Tamil Nadu or Maharashtra) without revealing residential street address.

---

## IPFS and End-to-End Encryption
- All files stored on IPFS are encrypted on the client side prior to upload.
- No unencrypted data is ever transmitted across the network or stored in databases.
- The Copilot operates entirely outside the encryption perimeter: it has no access to encryption keys, decryption algorithms, or plaintext buffers.
