export interface BharosaApiClientConfig {
  baseUrl: string;
  accessToken?: string;
}

export class BharosaApiClient {
  private baseUrl: string;
  private accessToken?: string;

  constructor(config: BharosaApiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.accessToken = config.accessToken;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  private async request<T = any>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.accessToken) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }

    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(errorBody.message || `API request failed with status ${res.status}`);
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

  async getMe(): Promise<{ user: { address: string; chainId: number }; did: string }> {
    return this.request('/v1/auth/me');
  }
}
