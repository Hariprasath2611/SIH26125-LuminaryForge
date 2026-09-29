import { ethers, ContractRunner } from 'ethers';
import {
  IdentityRegistryABI,
  BharosaAccessControlABI,
  OwnershipRegistryABI,
  SocialRecoveryABI,
  AuditAnchorABI,
  ZKCredentialVerifierABI,
} from './index';

export class BharosaContracts {
  static getIdentityRegistry(address: string, runner: ContractRunner): ethers.Contract {
    return new ethers.Contract(address, IdentityRegistryABI, runner);
  }

  static getAccessControl(address: string, runner: ContractRunner): ethers.Contract {
    return new ethers.Contract(address, BharosaAccessControlABI, runner);
  }

  static getOwnershipRegistry(address: string, runner: ContractRunner): ethers.Contract {
    return new ethers.Contract(address, OwnershipRegistryABI, runner);
  }

  static getSocialRecovery(address: string, runner: ContractRunner): ethers.Contract {
    return new ethers.Contract(address, SocialRecoveryABI, runner);
  }

  static getAuditAnchor(address: string, runner: ContractRunner): ethers.Contract {
    return new ethers.Contract(address, AuditAnchorABI, runner);
  }

  static getZKVerifier(address: string, runner: ContractRunner): ethers.Contract {
    return new ethers.Contract(address, ZKCredentialVerifierABI, runner);
  }
}
