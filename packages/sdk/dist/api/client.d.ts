export interface BharosaApiClientConfig {
    baseUrl: string;
    accessToken?: string;
}
export declare class BharosaApiClient {
    private baseUrl;
    private accessToken?;
    constructor(config: BharosaApiClientConfig);
    setAccessToken(token: string): void;
    private request;
    getNonce(): Promise<{
        nonce: string;
    }>;
    verifySIWE(message: string, signature: string): Promise<{
        success: boolean;
        user: {
            address: string;
            chainId: number;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshToken?: string): Promise<{
        success: boolean;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(): Promise<{
        success: boolean;
        message: string;
    }>;
    getMe(): Promise<{
        user: {
            address: string;
            chainId: number;
        };
        did: string;
    }>;
}
//# sourceMappingURL=client.d.ts.map