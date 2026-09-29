"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BharosaContracts = void 0;
const ethers_1 = require("ethers");
const index_1 = require("./index");
class BharosaContracts {
    static getIdentityRegistry(address, runner) {
        return new ethers_1.ethers.Contract(address, index_1.IdentityRegistryABI, runner);
    }
    static getAccessControl(address, runner) {
        return new ethers_1.ethers.Contract(address, index_1.BharosaAccessControlABI, runner);
    }
    static getOwnershipRegistry(address, runner) {
        return new ethers_1.ethers.Contract(address, index_1.OwnershipRegistryABI, runner);
    }
    static getSocialRecovery(address, runner) {
        return new ethers_1.ethers.Contract(address, index_1.SocialRecoveryABI, runner);
    }
    static getAuditAnchor(address, runner) {
        return new ethers_1.ethers.Contract(address, index_1.AuditAnchorABI, runner);
    }
    static getZKVerifier(address, runner) {
        return new ethers_1.ethers.Contract(address, index_1.ZKCredentialVerifierABI, runner);
    }
}
exports.BharosaContracts = BharosaContracts;
//# sourceMappingURL=client.js.map