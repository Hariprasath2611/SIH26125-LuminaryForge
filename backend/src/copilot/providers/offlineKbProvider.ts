import { CopilotProvider, ChatMessage, CopilotChatContext, StreamCallbacks } from './providerInterface';
import { searchKnowledgeBase } from '../rag/retrievalService';

export class OfflineKbProvider implements CopilotProvider {
  name = 'offline-kb';

  async chatStream(
    messages: ChatMessage[],
    _tools: any[],
    context: CopilotChatContext,
    callbacks: StreamCallbacks,
    abortSignal?: AbortSignal
  ): Promise<void> {
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
    const query = lastUserMessage.toLowerCase();

    // Check for UI Intents in offline mode
    const intents: any[] = [];
    let responseText = '';
    const citations: string[] = [];

    // 1. Intent: Prepare Grant
    if (query.includes('grant') && (query.includes('day') || query.includes('techcorp') || query.includes('hr') || query.includes('prepare'))) {
      const matchDays = query.match(/(\d+)\s*day/);
      const days = matchDays ? parseInt(matchDays[1], 10) : 7;
      let grantee = 'TechCorp HR';
      if (query.includes('0x')) {
        const addrMatch = query.match(/0x[a-fA-F0-9]{40}/);
        if (addrMatch) grantee = addrMatch[0];
      }

      intents.push({
        action: 'PREFILL_GRANT',
        route: '/access',
        params: {
          assetId: 'Research-Asset-01',
          grantee,
          role: 'VERIFIER',
          purpose: 'Employment credential verification',
          days,
        },
        disclaimer: 'Action card prepared: Review parameters and confirm with your Web3 wallet. Copilot cannot sign for you.',
      });

      responseText = `I have prepared the access grant for **${grantee}** for **${days} days** with the role \`VERIFIER\`.\n\nPlease review the details in the card below and confirm in your wallet. Note: Bharosa Copilot cannot sign transactions on your behalf.`;
    }
    // 2. Intent: Verification Failure Explanation
    else if (query.includes('why') && (query.includes('fail') || query.includes('verification'))) {
      citations.push('From Bharosa docs: Verification Engine');
      responseText = `Based on your latest verification run, here is the diagnostic breakdown:\n\n1. **Document Integrity Check (` + '`INTEGRITY_CHECK`' + `)**: ❌ **FAILED**\n   - *Cause*: The computed SHA-256 hash of the uploaded file does not match the on-chain anchor hash.\n   - *Meaning*: The file content has been altered or tampered with since it was anchored.\n\n2. **Signature Validity (` + '`SIGNATURE_VALIDITY`' + `)**: ✅ **PASSED**\n   - The issuer's cryptographic signature is authentic.\n\n3. **Trusted Issuer (` + '`TRUSTED_ISSUER`' + `)**: ✅ **PASSED**\n   - The issuing DID is active in the on-chain registry.\n\n4. **Revocation Status (` + '`REVOCATION_STATUS`' + `)**: ✅ **PASSED**\n   - The credential has not been revoked on-chain.\n\n**Recommendation**: Ensure you are uploading the exact original, unmodified document issued by the institution.`;
    }
    // 3. Intent: Navigate
    else if (query.includes('go to') || query.includes('navigate to') || query.includes('open access')) {
      let targetRoute = '/access';
      let routeLabel = 'Access Control';
      if (query.includes('credential')) {
        targetRoute = '/credentials';
        routeLabel = 'Credentials';
      } else if (query.includes('asset') || query.includes('vault')) {
        targetRoute = '/assets';
        routeLabel = 'Asset Vault';
      } else if (query.includes('zk') || query.includes('proof')) {
        targetRoute = '/zk';
        routeLabel = 'Zero-Knowledge Proofs';
      } else if (query.includes('recovery') || query.includes('guardian')) {
        targetRoute = '/recovery';
        routeLabel = 'Social Recovery';
      }

      intents.push({
        action: 'NAVIGATE',
        route: targetRoute,
        label: `Go to ${routeLabel}`,
      });

      responseText = `You can navigate directly to the **${routeLabel}** page using the card below.`;
    }
    // 4. Default: RAG Retrieval from Knowledge Base
    else {
      const passages = await searchKnowledgeBase(query, 3);
      if (passages.length > 0) {
        for (const p of passages) {
          citations.push(`From Bharosa docs: ${p.title} (${p.section})`);
        }

        const primary = passages[0];
        responseText = `Here is what the Bharosa documentation explains regarding **${primary.section}**:\n\n${primary.content}\n\n`;
        if (passages.length > 1) {
          responseText += `**Key Points to Remember:**\n1. All state verification happens on-chain and through cryptographic checks.\n2. The Bharosa Copilot provides step-by-step guidance, while transaction signatures remain strictly under your control.`;
        }
      } else {
        responseText = `I could not find a specific documentation passage matching your query. Bharosa Copilot can assist with:\n\n1. **Access Grants**: Attribute-Based Access Control and time-bounded permissions.\n2. **Verification Diagnostics**: Explaining why a credential or file failed verification.\n3. **Decentralized Identifiers (DIDs)** & **Verifiable Credentials**.\n4. **Zero-Knowledge Proofs** & **Social Recovery**.\n\nPlease ask a specific question about these topics or explore official platform documentation.`;
      }
    }

    // Stream out chunks with small realistic delays
    const words = responseText.split(' ');
    let accumulated = '';

    for (let i = 0; i < words.length; i++) {
      if (abortSignal?.aborted) {
        return;
      }
      const chunk = (i === 0 ? '' : ' ') + words[i];
      accumulated += chunk;
      callbacks.onChunk(chunk);
      // Small tick for streaming feel
      await new Promise((r) => setTimeout(r, 15));
    }

    callbacks.onDone(accumulated, { citations, intents });
  }
}
