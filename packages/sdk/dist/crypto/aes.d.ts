export interface EncryptedPayload {
    ciphertext: Uint8Array;
    iv: Uint8Array;
    aad: string;
    plaintextHash: string;
    ciphertextHash: string;
}
/**
 * Generates a random 256-bit AES-GCM key
 */
export declare function generateAESKey(): Promise<CryptoKey>;
/**
 * Exports raw 32-byte key material
 */
export declare function exportAESKey(key: CryptoKey): Promise<Uint8Array>;
/**
 * Imports raw 32-byte key material into a CryptoKey
 */
export declare function importAESKey(rawKey: Uint8Array): Promise<CryptoKey>;
/**
 * Generates a random 96-bit (12 bytes) IV for AES-GCM
 */
export declare function generateIV(): Uint8Array;
/**
 * Encrypts arbitrary file data with AES-256-GCM using unique 96-bit IV and AAD (assetId + version)
 */
export declare function encryptFile(data: Uint8Array, key: CryptoKey, assetId: string, version?: number): Promise<EncryptedPayload>;
/**
 * Decrypts AES-256-GCM ciphertext and validates authentication tag & AAD
 */
export declare function decryptFile(ciphertext: Uint8Array, key: CryptoKey, iv: Uint8Array, assetId: string, version?: number): Promise<Uint8Array>;
//# sourceMappingURL=aes.d.ts.map