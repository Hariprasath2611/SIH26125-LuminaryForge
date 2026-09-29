import { DIDDocument } from './types';
/**
 * Formats a did:ethr identifier
 */
export declare function formatDID(chainId: number, address: string): string;
/**
 * Parses a did:ethr identifier
 */
export declare function parseDID(did: string): {
    chainId: number;
    address: string;
};
/**
 * Constructs a W3C-compliant DID Document with key-wrapping agreement keys
 */
export declare function createDIDDocument(chainId: number, address: string, keyWrappingPublicKeyHex?: string): DIDDocument;
//# sourceMappingURL=did.d.ts.map