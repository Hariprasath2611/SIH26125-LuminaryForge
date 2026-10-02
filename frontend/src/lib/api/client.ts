export interface BharosaApiClientConfig {
  baseUrl: string;
  accessToken?: string;
  getToken?: () => Promise<string | null>;
}

export class BharosaApiClient {
  private baseUrl: string;
  private accessToken?: string;
  private getToken?: () => Promise<string | null>;

  constructor(config: BharosaApiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.accessToken = config.accessToken;
    this.getToken = config.getToken;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  setTokenProvider(provider: () => Promise<string | null>) {
    this.getToken = provider;
  }

  private async request<T = any>(
    endpoint: string,
    options: RequestInit = {},
    isRetry = false
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    let token = this.accessToken;
    if (!token && this.getToken) {
      try {
        const dynamicToken = await this.getToken();
        if (dynamicToken) token = dynamicToken;
      } catch {
        // Continue
      }
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (res.status === 401 && !isRetry && this.getToken) {
      // Retry once with refreshed token
      try {
        const freshToken = await this.getToken();
        if (freshToken) {
          headers['Authorization'] = `Bearer ${freshToken}`;
          const retryRes = await fetch(url, { ...options, headers });
          if (retryRes.ok) {
            return retryRes.json() as Promise<T>;
          }
        }
      } catch {
        // Fall through to error handling
      }
    }

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const err = new Error(errorBody.message || `API request failed with status ${res.status}`) as any;
      err.code = errorBody.code;
      err.status = res.status;
      throw err;
    }

    return res.json() as Promise<T>;
  }

  // SIWE Authentication
  async getNonce(): Promise<{ nonce: string }> {
    return this.request<{ nonce: string }>('/v1/auth/nonce');
  }

  async verifySIWE(
    message: string,
    signature: string
  ): Promise<{
    success: boolean;
    user: { address: string; chainId: number };
    accessToken: string;
    refreshToken: string;
  }> {
    const result = await this.request('/v1/auth/verify', {
      method: 'POST',
      body: JSON.stringify({ message, signature }),
    });

    if (result.accessToken) {
      this.accessToken = result.accessToken;
    }

    return result;
  }

  async linkWallet(
    message: string,
    signature: string,
    persona: string = 'HOLDER'
  ): Promise<{ success: boolean; message: string; account: any }> {
    return this.request('/v1/auth/link-wallet', {
      method: 'POST',
      body: JSON.stringify({ message, signature, persona }),
    });
  }

  async unlinkWallet(): Promise<{ success: boolean; message: string }> {
    return this.request('/v1/auth/unlink-wallet', {
      method: 'POST',
    });
  }

  async refresh(refreshToken?: string): Promise<{ success: boolean; accessToken: string; refreshToken: string }> {
    const result = await this.request('/v1/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });

    if (result.accessToken) {
      this.accessToken = result.accessToken;
    }

    return result;
  }

  async logout(): Promise<{ success: boolean; message: string }> {
    const res = await this.request('/v1/auth/logout', { method: 'POST' });
    this.accessToken = undefined;
    return res;
  }

  async getMe(): Promise<any> {
    return this.request('/v1/auth/me');
  }
}

export const apiClient = new BharosaApiClient({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:4000',
});

