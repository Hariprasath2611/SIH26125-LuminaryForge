import { NavigateFunction } from 'react-router-dom';

export interface NavigateIntent {
  action: 'NAVIGATE';
  route: string;
  label?: string;
}

export interface PrefillGrantIntent {
  action: 'PREFILL_GRANT';
  route: string;
  params: {
    assetId?: string;
    grantee: string;
    role: string;
    purpose: string;
    days: number;
  };
  disclaimer: string;
}

export interface PrefillCredentialShareIntent {
  action: 'PREFILL_CREDENTIAL_SHARE';
  route: string;
  params: {
    credentialId?: string;
    verifier: string;
  };
  disclaimer: string;
}

export type CopilotIntent = NavigateIntent | PrefillGrantIntent | PrefillCredentialShareIntent;

export function executeCopilotIntent(intent: CopilotIntent, navigate: NavigateFunction): void {
  if (intent.action === 'NAVIGATE') {
    navigate(intent.route);
    return;
  }

  if (intent.action === 'PREFILL_GRANT') {
    const params = new URLSearchParams({
      grantee: intent.params.grantee || '',
      role: intent.params.role || 'VERIFIER',
      purpose: intent.params.purpose || '',
      days: String(intent.params.days || 7),
    });
    if (intent.params.assetId) {
      params.set('assetId', intent.params.assetId);
    }
    navigate(`/access?${params.toString()}`, {
      state: { prefillGrant: intent.params },
    });
    return;
  }

  if (intent.action === 'PREFILL_CREDENTIAL_SHARE') {
    const params = new URLSearchParams({
      verifier: intent.params.verifier || '',
    });
    if (intent.params.credentialId) {
      params.set('credentialId', intent.params.credentialId);
    }
    navigate(`/credentials?${params.toString()}`, {
      state: { prefillShare: intent.params },
    });
    return;
  }
}
