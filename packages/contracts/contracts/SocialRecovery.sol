// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IIdentityRegistryRecovery {
    function updateController(bytes32 didHash, address newController) external;
    function getDIDByController(address controller) external view returns (IdentityRegistryDID memory);
}

struct IdentityRegistryDID {
    bytes32 didHash;
    address controller;
    string metadataCID;
    uint64 registeredAt;
    uint64 updatedAt;
    bool active;
}

/**
 * @title SocialRecovery
 * @notice Multi-guardian social recovery mechanism with timelock protection.
 * @dev Supports 48-hour default delay with a 2-minute demo mode for testing and hackathon judging.
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */
contract SocialRecovery is AccessControl, ReentrancyGuard {
    // -------------------------------------------------------------------------
    // Structs
    // -------------------------------------------------------------------------
    struct GuardianConfig {
        address[] guardians;
        uint256 threshold;
        bool initialized;
    }

    struct RecoverySession {
        address proposedNewOwner;
        uint256 approvalsCount;
        uint64 initiatedAt;
        uint64 unlockAt;
        bool active;
        bool executed;
    }

    // -------------------------------------------------------------------------
    // Constants & State
    // -------------------------------------------------------------------------
    uint64 public constant PRODUCTION_TIMELOCK = 48 hours;
    uint64 public constant DEMO_TIMELOCK = 2 minutes;

    bool public demoMode = true; // default true for hackathon local dev and evaluation

    IIdentityRegistryRecovery public identityRegistry;

    // account => GuardianConfig
    mapping(address => GuardianConfig) private _guardianConfigs;

    // account => isGuardian => bool
    mapping(address => mapping(address => bool)) private _isGuardian;

    // account => RecoverySession
    mapping(address => RecoverySession) private _recoverySessions;

    // account => sessionInitiatedAt => guardian => hasApproved
    mapping(address => mapping(uint64 => mapping(address => bool))) private _hasApproved;

    // -------------------------------------------------------------------------
    // Custom Errors
    // -------------------------------------------------------------------------
    error ZeroAddress();
    error InvalidThreshold();
    error DuplicateGuardian(address guardian);
    error NotAccountOwner();
    error GuardiansNotConfigured();
    error RecoveryAlreadyActive();
    error NoActiveRecovery();
    error NotAGuardian();
    error AlreadyApproved();
    error ThresholdNotMet(uint256 currentApprovals, uint256 requiredThreshold);
    error TimelockStillActive(uint64 unlockAt, uint64 currentTime);

    // -------------------------------------------------------------------------
    // Events
    // -------------------------------------------------------------------------
    event GuardiansUpdated(address indexed account, address[] guardians, uint256 threshold);
    event RecoveryInitiated(
        address indexed account,
        address indexed proposedNewOwner,
        address indexed initiator,
        uint64 unlockAt
    );
    event RecoveryApproved(
        address indexed account,
        address indexed guardian,
        uint256 currentApprovals,
        uint256 threshold
    );
    event RecoveryCancelled(address indexed account, address indexed cancelledBy);
    event RecoveryFinalized(address indexed account, address indexed oldOwner, address indexed newOwner);
    event DemoModeToggled(bool enabled);

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(address initialAdmin, address _identityRegistry) {
        if (initialAdmin == address(0)) revert ZeroAddress();
        _grantRole(DEFAULT_ADMIN_ROLE, initialAdmin);
        if (_identityRegistry != address(0)) {
            identityRegistry = IIdentityRegistryRecovery(_identityRegistry);
        }
    }

    function setDemoMode(bool enabled) external onlyRole(DEFAULT_ADMIN_ROLE) {
        demoMode = enabled;
        emit DemoModeToggled(enabled);
    }

    function setIdentityRegistry(address _identityRegistry) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_identityRegistry == address(0)) revert ZeroAddress();
        identityRegistry = IIdentityRegistryRecovery(_identityRegistry);
    }

    // -------------------------------------------------------------------------
    // Setup Guardians
    // -------------------------------------------------------------------------
    function setupGuardians(address[] calldata guardians, uint256 threshold) external nonReentrant {
        if (guardians.length == 0) revert InvalidThreshold();
        if (threshold == 0 || threshold > guardians.length) revert InvalidThreshold();

        // Clear existing guardians
        GuardianConfig storage current = _guardianConfigs[msg.sender];
        for (uint256 i = 0; i < current.guardians.length; i++) {
            _isGuardian[msg.sender][current.guardians[i]] = false;
        }

        delete current.guardians;

        for (uint256 i = 0; i < guardians.length; i++) {
            address g = guardians[i];
            if (g == address(0) || g == msg.sender) revert ZeroAddress();
            if (_isGuardian[msg.sender][g]) revert DuplicateGuardian(g);

            _isGuardian[msg.sender][g] = true;
            current.guardians.push(g);
        }

        current.threshold = threshold;
        current.initialized = true;

        emit GuardiansUpdated(msg.sender, guardians, threshold);
    }

    // -------------------------------------------------------------------------
    // Recovery Flow
    // -------------------------------------------------------------------------
    function initiateRecovery(address account, address proposedNewOwner) external nonReentrant {
        if (account == address(0) || proposedNewOwner == address(0)) revert ZeroAddress();
        GuardianConfig storage config = _guardianConfigs[account];
        if (!config.initialized) revert GuardiansNotConfigured();
        if (!_isGuardian[account][msg.sender]) revert NotAGuardian();

        RecoverySession storage session = _recoverySessions[account];
        if (session.active) revert RecoveryAlreadyActive();

        uint64 nowSec = uint64(block.timestamp);
        uint64 timelockDelay = demoMode ? DEMO_TIMELOCK : PRODUCTION_TIMELOCK;
        uint64 unlockAt = nowSec + timelockDelay;

        _recoverySessions[account] = RecoverySession({
            proposedNewOwner: proposedNewOwner,
            approvalsCount: 1,
            initiatedAt: nowSec,
            unlockAt: unlockAt,
            active: true,
            executed: false
        });

        _hasApproved[account][nowSec][msg.sender] = true;

        emit RecoveryInitiated(account, proposedNewOwner, msg.sender, unlockAt);
        emit RecoveryApproved(account, msg.sender, 1, config.threshold);
    }

    function approveRecovery(address account, address proposedNewOwner) external nonReentrant {
        GuardianConfig storage config = _guardianConfigs[account];
        if (!config.initialized) revert GuardiansNotConfigured();
        if (!_isGuardian[account][msg.sender]) revert NotAGuardian();

        RecoverySession storage session = _recoverySessions[account];
        if (!session.active) revert NoActiveRecovery();
        require(session.proposedNewOwner == proposedNewOwner, "Proposed new owner mismatch");
        if (_hasApproved[account][session.initiatedAt][msg.sender]) revert AlreadyApproved();

        _hasApproved[account][session.initiatedAt][msg.sender] = true;
        session.approvalsCount++;

        emit RecoveryApproved(account, msg.sender, session.approvalsCount, config.threshold);
    }

    function cancelRecovery(address account) external nonReentrant {
        RecoverySession storage session = _recoverySessions[account];
        if (!session.active) revert NoActiveRecovery();
        if (msg.sender != account && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
            revert NotAccountOwner();
        }

        session.active = false;
        emit RecoveryCancelled(account, msg.sender);
    }

    function finalizeRecovery(address account) external nonReentrant {
        GuardianConfig storage config = _guardianConfigs[account];
        RecoverySession storage session = _recoverySessions[account];

        if (!session.active) revert NoActiveRecovery();
        if (session.approvalsCount < config.threshold) {
            revert ThresholdNotMet(session.approvalsCount, config.threshold);
        }
        if (block.timestamp < session.unlockAt) {
            revert TimelockStillActive(session.unlockAt, uint64(block.timestamp));
        }

        session.active = false;
        session.executed = true;

        address newOwner = session.proposedNewOwner;

        // If identityRegistry is configured, transfer the DID controller
        if (address(identityRegistry) != address(0)) {
            try identityRegistry.getDIDByController(account) returns (IdentityRegistryDID memory did) {
                identityRegistry.updateController(did.didHash, newOwner);
            } catch {
                // non-fatal if DID not found
            }
        }

        emit RecoveryFinalized(account, account, newOwner);
    }

    // -------------------------------------------------------------------------
    // View Getters
    // -------------------------------------------------------------------------
    function getGuardians(address account) external view returns (address[] memory, uint256 threshold) {
        GuardianConfig storage c = _guardianConfigs[account];
        return (c.guardians, c.threshold);
    }

    function getRecoverySession(address account) external view returns (RecoverySession memory) {
        return _recoverySessions[account];
    }
}
