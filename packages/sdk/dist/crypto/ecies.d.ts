export interface WrappedKeyEnvelope {
    version: number;
    ephemeralPublicKeyHex: string;
    ivHex: string;
    ciphertextHex: string;
}
/**
 * Wraps (encrypts) a 32-byte AES file key to a recipient's secp256k1 public key
 */
export declare function wrapAESKey(rawKeyToWrap: Uint8Array, recipientPublicKeyHex: string): Promise<WrappedKeyEnvelope>;
/**
 * Unwraps (decrypts) a wrapped AES file key using recipient's secp256k1 private key
 */
export declare function unwrapAESKey(envelope: WrappedKeyEnvelope, recipientPrivateKeyHex: string): Promise<Uint8Array>;
//# sourceMappingURL=ecies.d.ts.map