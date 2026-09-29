import { ethers } from 'ethers';
import { VerifiableCredential } from './types';
export declare const BHAROSA_VC_PRIMARY_TYPE = "VerifiableCredential";
export declare function buildEIP712CredentialDomain(chainId: number): {
    name: string;
    version: string;
    chainId: bigint;
};
export declare function buildEIP712CredentialTypes(): {
    VerifiableCredential: {
        name: string;
        type: string;
    }[];
};
/**
 * Computes deterministic canonical hash of the credentialSubject object
 */
export declare function hashCredentialSubject(subject: Record<string, any>): string;
/**
 * Computes deterministic canonical on-chain anchor hash for a credential
 */
export declare function computeCredentialHash(vc: Omit<VerifiableCredential, 'proof'> | VerifiableCredential): string;
/**
 * Prepares the typed data value for EIP-712 signing
 */
export declare function buildEIP712CredentialValue(vc: Omit<VerifiableCredential, 'proof'> | VerifiableCredential): {
    id: string;
    issuer: string;
    subject: string;
    issuanceDate: string;
    expirationDate: string;
    credentialSubjectHash: string;
};
/**
 * Signs a credential using an Ethers signer via EIP-712
 */
export declare function signCredential(vcData: Omit<VerifiableCredential, 'proof'>, signer: ethers.Signer, chainId: number): Promise<VerifiableCredential>;
/**
 * Cryptographically verifies that the EIP-712 signature matches the issuer
 */
export declare function verifyCredentialSignature(vc: VerifiableCredential, chainId: number): boolean;
//# sourceMappingURL=vc.d.ts.map