export interface DerivedKeypair {
    privateKey: Uint8Array;
    publicKey: Uint8Array;
    privateKeyHex: string;
    publicKeyHex: string;
}
/**
 * Derives a deterministic secp256k1 wrapping keypair from a wallet signature using domain-separated HKDF-SHA256
 */
export declare function deriveWrappingKeypairFromSignature(signatureHex: string, version?: number): DerivedKeypair;
//# sourceMappingURL=hkdf.d.ts.map