export type UserRole = 'HOLDER' | 'ISSUER' | 'VERIFIER' | 'ADMIN';

export interface CallerContext {
  uid: string;
  role: UserRole;
  walletAddress?: string;
}

export const TOOL_ROLE_PERMISSIONS: Record<string, UserRole[]> = {
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

export function canExecuteTool(toolName: string, role: string): boolean {
  const normalizedRole = (role || 'HOLDER').toUpperCase() as UserRole;
  const allowedRoles = TOOL_ROLE_PERMISSIONS[toolName];
  if (!allowedRoles) {
    return false; // Tool not recognized or not allow-listed
  }
  return allowedRoles.includes(normalizedRole);
}
