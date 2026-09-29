import { ethers, ContractRunner } from 'ethers';
export declare class BharosaContracts {
    static getIdentityRegistry(address: string, runner: ContractRunner): ethers.Contract;
    static getAccessControl(address: string, runner: ContractRunner): ethers.Contract;
    static getOwnershipRegistry(address: string, runner: ContractRunner): ethers.Contract;
    static getSocialRecovery(address: string, runner: ContractRunner): ethers.Contract;
    static getAuditAnchor(address: string, runner: ContractRunner): ethers.Contract;
    static getZKVerifier(address: string, runner: ContractRunner): ethers.Contract;
}
//# sourceMappingURL=client.d.ts.map