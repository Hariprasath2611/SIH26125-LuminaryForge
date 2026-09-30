import { ethers, keccak256, toUtf8Bytes, verifyTypedData, getAddress, isAddress } from 'ethers';

export interface CredentialSubject {
  id: string;
  [key: string]: any;
}

export interface CredentialProof {
  type: string;
  created: string;
  verificationMethod: string;
  proofPurpose: string;
  proofValue: string;
}

export interface VerifiableCredential {
  '@context': string[];
  id: string;
  type: string[];
  issuer: {
    id: string;
    address: string;
    name?: string;
  };
  issuanceDate: string;
  expirationDate?: string;
  credentialSubject: CredentialSubject;
  proof?: CredentialProof;
}

export function formatDID(chainId: number, address: string): string {
  if (!isAddress(address)) {
    throw new Error(`Invalid Ethereum address: ${address}`);
  }
  const checksummed = getAddress(address);
  return `did:ethr:${chainId}:${checksummed}`;
}

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

export function hashCredentialSubject(subject: Record<string, any>): string {
  const sortedKeys = Object.keys(subject).sort();
  const canonicalObj: Record<string, any> = {};
  for (const k of sortedKeys) {
    canonicalObj[k] = subject[k];
  }
  return keccak256(toUtf8Bytes(JSON.stringify(canonicalObj)));
}

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
