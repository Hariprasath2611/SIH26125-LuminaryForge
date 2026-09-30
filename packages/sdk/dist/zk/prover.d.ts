export interface PredicateProofParams {
    attributeName: string;
    attributeValue: number;
    threshold: number;
    issuerAddress: string;
    salt?: string;
}
export interface Groth16ProofPoints {
    a: [string, string];
    b: [[string, string], [string, string]];
    c: [string, string];
    input: [string, string, string];
}
export interface PredicateProofResult {
    success: boolean;
    predicateSatisfied: boolean;
    error?: string;
    proof?: Groth16ProofPoints;
    commitment?: string;
    publicSignals?: {
        issuerKeyHash: string;
        threshold: number;
        currentTime: number;
        attributeName: string;
    };
    hiddenAttributes?: {
        attributeValueRedacted: true;
        saltRedacted: true;
    };
}
/**
 * Generates a Zero-Knowledge predicate proof (e.g. CGPA >= threshold or Age >= 18).
 * If attributeValue < threshold, the constraint check fails and no valid proof can be synthesized.
 */
export declare function generatePredicateProof(params: PredicateProofParams): Promise<PredicateProofResult>;
/**
 * Validates a generated predicate proof locally before submitting on-chain
 */
export declare function verifyPredicateLocally(proofResult: PredicateProofResult): boolean;
//# sourceMappingURL=prover.d.ts.map