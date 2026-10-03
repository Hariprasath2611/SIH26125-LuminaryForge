import { z } from 'zod';

export interface CopilotTool {
  name: string;
  description: string;
  parameters: z.ZodObject<any>;
}

export const searchDocsTool: CopilotTool = {
  name: 'search_docs',
  description: 'Search official Bharosa knowledge base and documentation for platform concepts, step-by-step guides, troubleshooting, and ABAC rules.',
  parameters: z.object({
    query: z.string().describe('Search query for Bharosa documentation'),
  }),
};

export const getMyStatusTool: CopilotTool = {
  name: 'get_my_status',
  description: 'Get high-level counts and status for current user (DID registered, credential count, asset count, active grants count, pending requests count).',
  parameters: z.object({}),
};

export const listMyCredentialsTool: CopilotTool = {
  name: 'list_my_credentials',
  description: 'List user credentials summary (id, issuer name, status, expiry). Does NOT reveal private claim values.',
  parameters: z.object({}),
};

export const listAccessRequestsTool: CopilotTool = {
  name: 'list_access_requests',
  description: 'List incoming or pending access requests for the caller.',
  parameters: z.object({}),
};

export const listMyGrantsTool: CopilotTool = {
  name: 'list_my_grants',
  description: 'List active access grants issued by or granted to the user.',
  parameters: z.object({}),
};

export const explainVerificationTool: CopilotTool = {
  name: 'explain_verification',
  description: 'Explain a verification failure or report using structured check results (integrity, signature, issuer trust, revocation status). Never exposes private file contents.',
  parameters: z.object({
    reportId: z.string().optional().describe('Optional verification report ID or latest check reference'),
  }),
};

export const getSecurityAlertsTool: CopilotTool = {
  name: 'get_security_alerts',
  description: 'Admin-only: Retrieve active security alerts and anomaly reports detected by the Bharosa Security Engine.',
  parameters: z.object({}),
};

// UI Intent Tools (return intent payloads to be displayed as Action Cards, NEVER executed automatically)
export const navigateTool: CopilotTool = {
  name: 'navigate',
  description: 'Provide an Action Card navigation intent for the user to visit an app page (e.g. /access, /credentials, /assets, /verify, /zk, /recovery, /admin).',
  parameters: z.object({
    route: z.string().describe('Target app route to navigate to'),
    label: z.string().optional().describe('Button label for the card, e.g. "Go to Access Control"'),
  }),
};

export const prefillGrantTool: CopilotTool = {
  name: 'prefill_grant',
  description: 'Prepare an Action Card with prefilled parameters for granting access. User must review and sign in their wallet; this does NOT send any transaction.',
  parameters: z.object({
    assetId: z.string().optional().describe('Target asset ID or title'),
    grantee: z.string().describe('Grantee address, DID, or organization name'),
    role: z.string().optional().default('VERIFIER').describe('Role assigned to grantee'),
    purpose: z.string().describe('Stated purpose for access'),
    days: z.number().int().min(1).max(365).default(7).describe('Duration of access grant in days'),
  }),
};

export const prefillCredentialShareTool: CopilotTool = {
  name: 'prefill_credential_share',
  description: 'Prepare an Action Card with prefilled credential sharing parameters. Requires user wallet signature.',
  parameters: z.object({
    credentialId: z.string().optional().describe('Credential ID to share'),
    verifier: z.string().describe('Target verifier address or name'),
  }),
};

export const ALL_TOOLS: CopilotTool[] = [
  searchDocsTool,
  getMyStatusTool,
  listMyCredentialsTool,
  listAccessRequestsTool,
  listMyGrantsTool,
  explainVerificationTool,
  getSecurityAlertsTool,
  navigateTool,
  prefillGrantTool,
  prefillCredentialShareTool,
];
