"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOOL_ROLE_PERMISSIONS = void 0;
exports.canExecuteTool = canExecuteTool;
exports.TOOL_ROLE_PERMISSIONS = {
    search_docs: ['HOLDER', 'ISSUER', 'VERIFIER', 'ADMIN'],
    get_my_status: ['HOLDER', 'ISSUER', 'VERIFIER', 'ADMIN'],
    list_my_credentials: ['HOLDER', 'ADMIN'],
    list_access_requests: ['HOLDER', 'VERIFIER', 'ADMIN'],
    list_my_grants: ['HOLDER', 'VERIFIER', 'ADMIN'],
    explain_verification: ['HOLDER', 'ISSUER', 'VERIFIER', 'ADMIN'],
    get_security_alerts: ['ADMIN'], // Restricted to ADMIN only
    navigate: ['HOLDER', 'ISSUER', 'VERIFIER', 'ADMIN'],
    prefill_grant: ['HOLDER', 'ADMIN'],
    prefill_credential_share: ['HOLDER', 'ADMIN'],
};
function canExecuteTool(toolName, role) {
    const normalizedRole = (role || 'HOLDER').toUpperCase();
    const allowedRoles = exports.TOOL_ROLE_PERMISSIONS[toolName];
    if (!allowedRoles) {
        return false; // Tool not recognized or not allow-listed
    }
    return allowedRoles.includes(normalizedRole);
}
