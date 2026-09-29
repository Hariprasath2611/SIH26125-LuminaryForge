"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BHAROSA_VC_PRIMARY_TYPE = void 0;
exports.buildEIP712CredentialDomain = buildEIP712CredentialDomain;
exports.buildEIP712CredentialTypes = buildEIP712CredentialTypes;
exports.hashCredentialSubject = hashCredentialSubject;
exports.computeCredentialHash = computeCredentialHash;
exports.buildEIP712CredentialValue = buildEIP712CredentialValue;
exports.signCredential = signCredential;
exports.verifyCredentialSignature = verifyCredentialSignature;
const ethers_1 = require("ethers");
const did_1 = require("./did");
exports.BHAROSA_VC_PRIMARY_TYPE = 'VerifiableCredential';
function buildEIP712CredentialDomain(chainId) {
    return {
        name: 'BharosaCredentialRegistry',
        version: '1',
        chainId: BigInt(chainId),
    };
}
function buildEIP712CredentialTypes() {
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
function hashCredentialSubject(subject) {
    // Sort keys for canonical representation
    const sortedKeys = Object.keys(subject).sort();
    const canonicalObj = {};
    for (const k of sortedKeys) {
        canonicalObj[k] = subject[k];
    }
    return (0, ethers_1.keccak256)((0, ethers_1.toUtf8Bytes)(JSON.stringify(canonicalObj)));
}
/**
 * Computes deterministic canonical on-chain anchor hash for a credential
 */
function computeCredentialHash(vc) {
    const subjectHash = hashCredentialSubject(vc.credentialSubject);
    const canonicalPayload = [
        vc.id,
        vc.issuer.id.toLowerCase(),
        vc.credentialSubject.id.toLowerCase(),
        vc.issuanceDate,
        vc.expirationDate || '',
        subjectHash,
    ].join('|');
    return (0, ethers_1.keccak256)((0, ethers_1.toUtf8Bytes)(canonicalPayload));
}
/**
 * Prepares the typed data value for EIP-712 signing
 */
function buildEIP712CredentialValue(vc) {
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
async function signCredential(vcData, signer, chainId) {
    const domain = buildEIP712CredentialDomain(chainId);
    const types = buildEIP712CredentialTypes();
    const value = buildEIP712CredentialValue(vcData);
    const signature = await signer.signTypedData(domain, types, value);
    const signerAddress = await signer.getAddress();
    const proof = {
        type: 'EthereumEip712Signature2021',
        created: new Date().toISOString(),
        proofPurpose: 'assertionMethod',
        verificationMethod: `${(0, did_1.formatDID)(chainId, signerAddress)}#controller`,
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
function verifyCredentialSignature(vc, chainId) {
    if (!vc.proof || !vc.proof.proofValue) {
        return false;
    }
    const domain = buildEIP712CredentialDomain(chainId);
    const types = buildEIP712CredentialTypes();
    const value = buildEIP712CredentialValue(vc);
    try {
        const recoveredAddress = (0, ethers_1.verifyTypedData)(domain, types, value, vc.proof.proofValue);
        const expectedAddress = vc.issuer.address.toLowerCase();
        return recoveredAddress.toLowerCase() === expectedAddress;
    }
    catch (err) {
        return false;
    }
}
//# sourceMappingURL=vc.js.map