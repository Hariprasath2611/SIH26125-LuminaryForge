"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_TOOLS = exports.prefillCredentialShareTool = exports.prefillGrantTool = exports.navigateTool = exports.getSecurityAlertsTool = exports.explainVerificationTool = exports.listMyGrantsTool = exports.listAccessRequestsTool = exports.listMyCredentialsTool = exports.getMyStatusTool = exports.searchDocsTool = void 0;
const zod_1 = require("zod");
exports.searchDocsTool = {
    name: 'search_docs',
    description: 'Search official Bharosa knowledge base and documentation for platform concepts, step-by-step guides, troubleshooting, and ABAC rules.',
    parameters: zod_1.z.object({
        query: zod_1.z.string().describe('Search query for Bharosa documentation'),
    }),
};
exports.getMyStatusTool = {
    name: 'get_my_status',
    description: 'Get high-level counts and status for current user (DID registered, credential count, asset count, active grants count, pending requests count).',
    parameters: zod_1.z.object({}),
};
exports.listMyCredentialsTool = {
    name: 'list_my_credentials',
    description: 'List user credentials summary (id, issuer name, status, expiry). Does NOT reveal private claim values.',
    parameters: zod_1.z.object({}),
};
exports.listAccessRequestsTool = {
    name: 'list_access_requests',
    description: 'List incoming or pending access requests for the caller.',
    parameters: zod_1.z.object({}),
};
exports.listMyGrantsTool = {
    name: 'list_my_grants',
    description: 'List active access grants issued by or granted to the user.',
    parameters: zod_1.z.object({}),
};
exports.explainVerificationTool = {
    name: 'explain_verification',
    description: 'Explain a verification failure or report using structured check results (integrity, signature, issuer trust, revocation status). Never exposes private file contents.',
    parameters: zod_1.z.object({
        reportId: zod_1.z.string().optional().describe('Optional verification report ID or latest check reference'),
    }),
};
exports.getSecurityAlertsTool = {
    name: 'get_security_alerts',
    description: 'Admin-only: Retrieve active security alerts and anomaly reports detected by the Bharosa Security Engine.',
    parameters: zod_1.z.object({}),
};
// UI Intent Tools (return intent payloads to be displayed as Action Cards, NEVER executed automatically)
exports.navigateTool = {
    name: 'navigate',
    description: 'Provide an Action Card navigation intent for the user to visit an app page (e.g. /access, /credentials, /assets, /verify, /zk, /recovery, /admin).',
    parameters: zod_1.z.object({
        route: zod_1.z.string().describe('Target app route to navigate to'),
        label: zod_1.z.string().optional().describe('Button label for the card, e.g. "Go to Access Control"'),
    }),
};
exports.prefillGrantTool = {
    name: 'prefill_grant',
    description: 'Prepare an Action Card with prefilled parameters for granting access. User must review and sign in their wallet; this does NOT send any transaction.',
    parameters: zod_1.z.object({
        assetId: zod_1.z.string().optional().describe('Target asset ID or title'),
        grantee: zod_1.z.string().describe('Grantee address, DID, or organization name'),
        role: zod_1.z.string().optional().default('VERIFIER').describe('Role assigned to grantee'),
        purpose: zod_1.z.string().describe('Stated purpose for access'),
        days: zod_1.z.number().int().min(1).max(365).default(7).describe('Duration of access grant in days'),
    }),
};
exports.prefillCredentialShareTool = {
    name: 'prefill_credential_share',
    description: 'Prepare an Action Card with prefilled credential sharing parameters. Requires user wallet signature.',
    parameters: zod_1.z.object({
        credentialId: zod_1.z.string().optional().describe('Credential ID to share'),
        verifier: zod_1.z.string().describe('Target verifier address or name'),
    }),
};
exports.ALL_TOOLS = [
    exports.searchDocsTool,
    exports.getMyStatusTool,
    exports.listMyCredentialsTool,
    exports.listAccessRequestsTool,
    exports.listMyGrantsTool,
    exports.explainVerificationTool,
    exports.getSecurityAlertsTool,
    exports.navigateTool,
    exports.prefillGrantTool,
    exports.prefillCredentialShareTool,
];
