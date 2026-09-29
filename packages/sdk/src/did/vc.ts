import { ethers, keccak256, toUtf8Bytes, verifyTypedData } from 'ethers';
import { VerifiableCredential, CredentialProof } from './types';
import { formatDID, parseDID } from './did';

export const BHAROSA_VC_PRIMARY_TYPE = 'VerifiableCredential';

export function buildEIP712CredentialDomain(chainId: number) {
  return {
    name: 'BharosaCredentialRegistry',
    version: '1',
    chainId: BigInt(chainId),
  };
}

export function buildEIP712CredentialTypes() {
  return {
    VerifiableCredential: [
      { name: 'id', type: 'string' },
      { name: 'issuer', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'issuanceDate', type: 'string' },
      { name: 'expirationDate', type: 'string' },
      { name: 'credentialSubjectHash', type: 'bytes32' },
    ],
  };
}

/**
 * Computes deterministic canonical hash of the credentialSubject object
 */
export function hashCredentialSubject(subject: Record<string, any>): string {
  // Sort keys for canonical representation
  const sortedKeys = Object.keys(subject).sort();
  const canonicalObj: Record<string, any> = {};
  for (const k of sortedKeys) {
    canonicalObj[k] = subject[k];
  }
  return keccak256(toUtf8Bytes(JSON.stringify(canonicalObj)));
}

/**
 * Computes deterministic canonical on-chain anchor hash for a credential
 */
export function computeCredentialHash(
  vc: Omit<VerifiableCredential, 'proof'> | VerifiableCredential
): string {
  const subjectHash = hashCredentialSubject(vc.credentialSubject);
  const canonicalPayload = [
    vc.id,
    vc.issuer.id.toLowerCase(),
    vc.credentialSubject.id.toLowerCase(),
    vc.issuanceDate,
    vc.expirationDate || '',
    subjectHash,
  ].join('|');

  return keccak256(toUtf8Bytes(canonicalPayload));
}

/**
 * Prepares the typed data value for EIP-712 signing
 */
export function buildEIP712CredentialValue(
  vc: Omit<VerifiableCredential, 'proof'> | VerifiableCredential
) {
  return {
    id: vc.id,
    issuer: vc.issuer.id,
    subject: vc.credentialSubject.id,
    issuanceDate: vc.issuanceDate,
    expirationDate: vc.expirationDate || '',
    credentialSubjectHash: hashCredentialSubject(vc.credentialSubject),
  };
}

/**
 * Signs a credential using an Ethers signer via EIP-712
 */
export async function signCredential(
  vcData: Omit<VerifiableCredential, 'proof'>,
  signer: ethers.Signer,
  chainId: number
): Promise<VerifiableCredential> {
  const domain = buildEIP712CredentialDomain(chainId);
  const types = buildEIP712CredentialTypes();
  const value = buildEIP712CredentialValue(vcData);

  const signature = await signer.signTypedData(domain, types, value);
  const signerAddress = await signer.getAddress();

  const proof: CredentialProof = {
    type: 'EthereumEip712Signature2021',
    created: new Date().toISOString(),
    proofPurpose: 'assertionMethod',
    verificationMethod: `${formatDID(chainId, signerAddress)}#controller`,
    proofValue: signature,
  };

  return {
    ...vcData,
    proof,
  };
}

/**
 * Cryptographically verifies that the EIP-712 signature matches the issuer
 */
export function verifyCredentialSignature(
  vc: VerifiableCredential,
  chainId: number
): boolean {
  if (!vc.proof || !vc.proof.proofValue) {
    return false;
  }

  const domain = buildEIP712CredentialDomain(chainId);
  const types = buildEIP712CredentialTypes();
  const value = buildEIP712CredentialValue(vc);

  try {
    const recoveredAddress = verifyTypedData(domain, types, value, vc.proof.proofValue);
    const expectedAddress = vc.issuer.address.toLowerCase();
    return recoveredAddress.toLowerCase() === expectedAddress;
  } catch (err) {
    return false;
  }
}
