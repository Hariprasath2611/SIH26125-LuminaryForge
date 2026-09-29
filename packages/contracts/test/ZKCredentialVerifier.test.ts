import { expect } from "chai";
import { ethers } from "hardhat";
import { ZKCredentialVerifier, MockGroth16Verifier, IdentityRegistry } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("ZKCredentialVerifier", () => {
  let zkVerifier: ZKCredentialVerifier;
  let mockGroth16: MockGroth16Verifier;
  let identityRegistry: IdentityRegistry;
  let admin: SignerWithAddress;
  let trustedIssuer: SignerWithAddress;
  let student: SignerWithAddress;

  const mockA: [bigint, bigint] = [1n, 2n];
  const mockB: [[bigint, bigint], [bigint, bigint]] = [
    [1n, 2n],
    [3n, 4n],
  ];
  const mockC: [bigint, bigint] = [1n, 2n];

  beforeEach(async () => {
    [admin, trustedIssuer, student] = await ethers.getSigners();

    const IdentityFactory = await ethers.getContractFactory("IdentityRegistry");
    identityRegistry = (await IdentityFactory.deploy(admin.address)) as IdentityRegistry;
    await identityRegistry.waitForDeployment();

    const MockVerifierFactory = await ethers.getContractFactory("MockGroth16Verifier");
    mockGroth16 = (await MockVerifierFactory.deploy()) as MockGroth16Verifier;
    await mockGroth16.waitForDeployment();

    const ZKVerifierFactory = await ethers.getContractFactory("ZKCredentialVerifier");
    zkVerifier = (await ZKVerifierFactory.deploy(
      admin.address,
      await mockGroth16.getAddress(),
      await identityRegistry.getAddress()
    )) as ZKCredentialVerifier;
    await zkVerifier.waitForDeployment();

    // Add issuer to identity registry
    await identityRegistry.connect(admin).addIssuer(trustedIssuer.address);
  });

  it("should verify proof when issuer is trusted in IdentityRegistry", async () => {
    const issuerKeyHash = BigInt(trustedIssuer.address);
    const threshold = 75n; // e.g. CGPA 7.5 or percentage
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    const publicInputs: [bigint, bigint, bigint] = [issuerKeyHash, threshold, currentTime];

    await expect(zkVerifier.connect(student).verifyCredentialProof(mockA, mockB, mockC, publicInputs))
      .to.emit(zkVerifier, "ZKProofVerified")
      .withArgs(ethers.zeroPadValue(ethers.toBeHex(issuerKeyHash), 32), threshold, student.address, true, (val: any) => val > 0);
  });

  it("should revert if issuer key hash is not authorized", async () => {
    const unauthorizedIssuerKeyHash = BigInt("0x1234567890123456789012345678901234567890");
    const threshold = 80n;
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    const publicInputs: [bigint, bigint, bigint] = [unauthorizedIssuerKeyHash, threshold, currentTime];

    await expect(
      zkVerifier.connect(student).verifyCredentialProof(mockA, mockB, mockC, publicInputs)
    ).to.be.revertedWithCustomError(zkVerifier, "UnauthorizedIssuerKeyHash");
  });

  it("should allow admin to explicitly authorize issuer key hashes", async () => {
    const keyHashBytes32 = ethers.keccak256(ethers.toUtf8Bytes("UniversityOfDelhiEdDSAPubKey"));
    const keyHashUint = BigInt(keyHashBytes32);

    await zkVerifier.connect(admin).setIssuerKeyHashAuthorized(keyHashBytes32, true);

    const publicInputs: [bigint, bigint, bigint] = [keyHashUint, 60n, 123456789n];
    await expect(zkVerifier.connect(student).verifyCredentialProof(mockA, mockB, mockC, publicInputs))
      .to.emit(zkVerifier, "ZKProofVerified");
  });
});
