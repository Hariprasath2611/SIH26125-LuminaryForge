export interface DIDDocument {
  '@context': string | string[];
  id: string; // did:ethr:<chainId>:<address>
  controller: string;
  verificationMethod: Array<{
    id: string;
    type: string;
    controller: string;
    blockchainAccountId?: string;
    publicKeyHex?: string;
  }>;
  authentication: string[];
  assertionMethod: string[];
  keyAgreement?: Array<{
    id: string;
    type: string;
    controller: string;
    publicKeyHex: string;
  }>;
}

export interface CredentialSubject {
  id: string; // Holder DID
  [key: string]: any;
}

export interface CredentialIssuer {
  id: string; // Issuer DID
  address: string;
  name?: string;
}

export interface CredentialProof {
  type: 'EthereumEip712Signature2021' | 'EcdsaSecp256k1Signature2019';
  created: string;
  proofPurpose: 'assertionMethod';
  verificationMethod: string;
  proofValue: string; // EIP-712 hex signature
}

export interface VerifiableCredential {
  '@context': string[];
  id: string;
  type: string[];
  issuer: CredentialIssuer;
  issuanceDate: string;
  expirationDate?: string;
  credentialSubject: CredentialSubject;
  proof: CredentialProof;
}

export interface VerificationChecks {
  signatureValid: boolean;
  issuerTrusted: boolean;
  anchoredOnChain: boolean;
  notRevoked: boolean;
  notExpired: boolean;
  subjectMatches: boolean;
}

export interface CredentialVerificationResult {
  valid: boolean;
  checks: VerificationChecks;
  issuerAddress: string;
  subjectAddress: string;
  credentialHash: string;
  expiry?: string;
  errors: string[];
}
