export interface IPFSConfig {
    gatewayUrl: string;
    apiUrl?: string;
}
export interface UploadResult {
    cid: string;
    size: number;
    hash: string;
}
export declare class IPFSClient {
    private gatewayUrl;
    private memoryStore;
    constructor(config?: Partial<IPFSConfig>);
    /**
     * Uploads raw bytes to IPFS or local simulated storage
     */
    upload(data: Uint8Array, filename?: string): Promise<UploadResult>;
    /**
     * Fetches content by CID
     */
    fetch(cid: string): Promise<Uint8Array>;
    /**
     * Uploads JSON metadata object
     */
    uploadJSON(obj: Record<string, any>): Promise<UploadResult>;
    /**
     * Fetches and parses JSON metadata by CID
     */
    fetchJSON<T = any>(cid: string): Promise<T>;
}
export declare const defaultIpfsClient: IPFSClient;
//# sourceMappingURL=client.d.ts.map