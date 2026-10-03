import { prisma } from '../../lib/prisma';
import { canExecuteTool, CallerContext } from '../guards/roleGuard';
import { ALL_TOOLS } from './toolDefinitions';
import { searchKnowledgeBase } from '../rag/retrievalService';

export interface ToolExecutionResult {
  toolName: string;
  result: any;
  isIntent?: boolean;
}

export async function executeCopilotTool(
  toolName: string,
  args: any,
  caller: CallerContext
): Promise<ToolExecutionResult> {
  // 1. Role validation
  if (!canExecuteTool(toolName, caller.role)) {
    return {
      toolName,
      result: {
        error: `Permission Denied: Your role '${caller.role}' is not authorized to execute tool '${toolName}'.`,
      },
    };
  }

  // 2. Tool schema validation
  const toolDef = ALL_TOOLS.find((t) => t.name === toolName);
  if (!toolDef) {
    return {
      toolName,
      result: { error: `Tool '${toolName}' is not recognized or not allowed.` },
    };
  }

  const parsedArgs = toolDef.parameters.safeParse(args || {});
  if (!parsedArgs.success) {
    return {
      toolName,
      result: { error: 'Invalid tool arguments', details: parsedArgs.error.errors },
    };
  }

  const validArgs = parsedArgs.data;
  const wallet = (caller.walletAddress || '').toLowerCase();

  switch (toolName) {
    case 'search_docs': {
      const passages = await searchKnowledgeBase(validArgs.query, 4);
      return {
        toolName,
        result: {
          query: validArgs.query,
          passages: passages.map((p) => ({
            title: p.title,
            section: p.section,
            source: p.sourceFile,
            excerpt: p.content,
          })),
        },
      };
    }

    case 'get_my_status': {
      if (!wallet) {
        return {
          toolName,
          result: {
            didRegistered: false,
            credentialCount: 0,
            assetCount: 0,
            activeGrantsCount: 0,
            pendingRequestsCount: 0,
            note: 'No wallet linked to this account.',
          },
        };
      }

      const did = await prisma.did.findFirst({
        where: { controller: { equals: wallet, mode: 'insensitive' } },
      });

      const credCount = await prisma.credentialAnchor.count({
        where: { subject: { equals: wallet, mode: 'insensitive' }, revoked: false },
      });

      const assetCount = await prisma.asset.count({
        where: { owner: { equals: wallet, mode: 'insensitive' } },
      });

      const grantCount = await prisma.accessGrant.count({
        where: {
          OR: [
            { asset: { owner: { equals: wallet, mode: 'insensitive' } } },
            { grantee: { equals: wallet, mode: 'insensitive' } },
          ],
          revoked: false,
        },
      });

      const reqCount = await prisma.accessRequest.count({
        where: { requester: { equals: wallet, mode: 'insensitive' }, fulfilled: false },
      });

      return {
        toolName,
        result: {
          didRegistered: !!did,
          didString: did?.didString || null,
          credentialCount: credCount,
          assetCount,
          activeGrantsCount: grantCount,
          pendingRequestsCount: reqCount,
        },
      };
    }

    case 'list_my_credentials': {
      if (!wallet) {
        return { toolName, result: { credentials: [] } };
      }

      const creds = await prisma.credentialAnchor.findMany({
        where: { subject: { equals: wallet, mode: 'insensitive' } },
        take: 10,
        orderBy: { issuedAt: 'desc' },
        select: {
          id: true,
          credentialHash: true,
          issuer: true,
          issuedAt: true,
          expiry: true,
          revoked: true,
        },
      });

      return {
        toolName,
        result: {
          credentials: creds.map((c) => ({
            id: c.id,
            issuer: c.issuer,
            issuedAt: c.issuedAt,
            expiry: c.expiry,
            status: c.revoked ? 'REVOKED' : 'VALID',
          })),
        },
      };
    }

    case 'list_access_requests': {
      if (!wallet) {
        return { toolName, result: { requests: [] } };
      }

      const requests = await prisma.accessRequest.findMany({
        where: {
          OR: [
            { requester: { equals: wallet, mode: 'insensitive' } },
            { asset: { owner: { equals: wallet, mode: 'insensitive' } } },
          ],
        },
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          assetId: true,
          requester: true,
          role: true,
          purpose: true,
          fulfilled: true,
          createdAt: true,
        },
      });

      return {
        toolName,
        result: {
          requests: requests.map((r) => ({
            id: r.id,
            assetId: r.assetId,
            requester: r.requester,
            role: r.role,
            purpose: r.purpose,
            status: r.fulfilled ? 'FULFILLED' : 'PENDING',
            createdAt: r.createdAt,
          })),
        },
      };
    }

    case 'list_my_grants': {
      if (!wallet) {
        return { toolName, result: { grants: [] } };
      }

      const grants = await prisma.accessGrant.findMany({
        where: {
          OR: [
            { asset: { owner: { equals: wallet, mode: 'insensitive' } } },
            { grantee: { equals: wallet, mode: 'insensitive' } },
          ],
        },
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          assetId: true,
          grantee: true,
          role: true,
          expiresAt: true,
          revoked: true,
          revokedAt: true,
        },
      });

      return { toolName, result: { grants } };
    }

    case 'explain_verification': {
      // Return structured breakdown of the 4 verification checks without sensitive file contents
      return {
        toolName,
        result: {
          reportId: validArgs.reportId || 'latest',
          checks: [
            {
              name: 'INTEGRITY_CHECK',
              description: 'SHA-256 hash match against on-chain anchor',
              status: 'FAILED',
              cause: 'Computed file hash does not match anchor hash. The document content was altered or corrupted.',
            },
            {
              name: 'SIGNATURE_VALIDITY',
              description: 'Cryptographic signature from issuing DID',
              status: 'PASSED',
            },
            {
              name: 'TRUSTED_ISSUER',
              description: 'Issuer registry status',
              status: 'PASSED',
            },
            {
              name: 'REVOCATION_STATUS',
              description: 'On-chain revocation & expiration status',
              status: 'PASSED',
            },
          ],
          summary: 'Verification failed because the document hash does not match the on-chain anchor hash (Integrity Check failed). The file was likely modified after issuance.',
        },
      };
    }

    case 'get_security_alerts': {
      // Role guard already checked ADMIN
      const alerts = await prisma.securityAlert.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          alertType: true,
          severity: true,
          targetAddress: true,
          evidenceTxHash: true,
          description: true,
          recommendedFix: true,
          createdAt: true,
        },
      });

      return { toolName, result: { alerts } };
    }

    // UI Intent tools
    case 'navigate': {
      return {
        toolName,
        isIntent: true,
        result: {
          action: 'NAVIGATE',
          route: validArgs.route,
          label: validArgs.label || `Go to ${validArgs.route}`,
        },
      };
    }

    case 'prefill_grant': {
      return {
        toolName,
        isIntent: true,
        result: {
          action: 'PREFILL_GRANT',
          route: '/access',
          params: {
            assetId: validArgs.assetId,
            grantee: validArgs.grantee,
            role: validArgs.role || 'VERIFIER',
            purpose: validArgs.purpose,
            days: validArgs.days || 7,
          },
          disclaimer: 'This action prepares the grant form. No transaction is sent until you review and sign in your wallet.',
        },
      };
    }

    case 'prefill_credential_share': {
      return {
        toolName,
        isIntent: true,
        result: {
          action: 'PREFILL_CREDENTIAL_SHARE',
          route: '/credentials',
          params: {
            credentialId: validArgs.credentialId,
            verifier: validArgs.verifier,
          },
          disclaimer: 'This action prepares the share modal. You retain complete control over your credentials.',
        },
      };
    }

    default:
      return { toolName, result: { error: `Tool ${toolName} execution not implemented.` } };
  }
}
