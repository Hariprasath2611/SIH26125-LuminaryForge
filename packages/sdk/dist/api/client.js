"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BharosaApiClient = void 0;
class BharosaApiClient {
    baseUrl;
    accessToken;
    constructor(config) {
        this.baseUrl = config.baseUrl.replace(/\/$/, '');
        this.accessToken = config.accessToken;
    }
    setAccessToken(token) {
        this.accessToken = token;
    }
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
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
        return res.json();
    }
    // SIWE Authentication
    async getNonce() {
        return this.request('/v1/auth/nonce');
    }
    async verifySIWE(message, signature) {
        const result = await this.request('/v1/auth/verify', {
            method: 'POST',
            body: JSON.stringify({ message, signature }),
        });
        if (result.accessToken) {
            this.accessToken = result.accessToken;
        }
        return result;
    }
    async refresh(refreshToken) {
        const result = await this.request('/v1/auth/refresh', {
            method: 'POST',
            body: JSON.stringify({ refreshToken }),
        });
        if (result.accessToken) {
            this.accessToken = result.accessToken;
        }
        return result;
    }
    async logout() {
        const res = await this.request('/v1/auth/logout', { method: 'POST' });
        this.accessToken = undefined;
        return res;
    }
    async getMe() {
        return this.request('/v1/auth/me');
    }
}
exports.BharosaApiClient = BharosaApiClient;
//# sourceMappingURL=client.js.map