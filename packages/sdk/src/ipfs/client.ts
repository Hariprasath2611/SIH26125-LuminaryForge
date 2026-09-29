import { sha256Hex } from '../crypto/hash';

export interface IPFSConfig {
  gatewayUrl: string;
  apiUrl?: string;
}

export interface UploadResult {
  cid: string;
  size: number;
  hash: string;
}

export class IPFSClient {
  private gatewayUrl: string;
  private memoryStore = new Map<string, Uint8Array>();

  constructor(config?: Partial<IPFSConfig>) {
    this.gatewayUrl = config?.gatewayUrl || 'https://gateway.pinata.cloud/ipfs/';
  }

  /**
   * Uploads raw bytes to IPFS or local simulated storage
   */
  async upload(data: Uint8Array, filename: string = 'file.bin'): Promise<UploadResult> {
    const hash = sha256Hex(data);
    // Generate deterministic CIDv1 mock representation
    const cid = `bafkrei${hash.slice(2, 40)}`;

    this.memoryStore.set(cid, data);

    return {
      cid,
      size: data.length,
      hash,
    };
  }

  /**
   * Fetches content by CID
   */
  async fetch(cid: string): Promise<Uint8Array> {
    const local = this.memoryStore.get(cid);
    if (local) {
      return local;
    }

    const cleanCid = cid.replace(/^ipfs:\/\//, '');
    const url = `${this.gatewayUrl}${cleanCid}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch IPFS CID ${cid}: ${res.statusText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    this.memoryStore.set(cid, data);
    return data;
  }

  /**
   * Uploads JSON metadata object
   */
  async uploadJSON(obj: Record<string, any>): Promise<UploadResult> {
    const jsonStr = JSON.stringify(obj, null, 2);
    const data = new TextEncoder().encode(jsonStr);
    return this.upload(data, 'metadata.json');
  }

  /**
   * Fetches and parses JSON metadata by CID
   */
  async fetchJSON<T = any>(cid: string): Promise<T> {
    const bytes = await this.fetch(cid);
    const jsonStr = new TextDecoder().decode(bytes);
    return JSON.parse(jsonStr) as T;
  }
}

export const defaultIpfsClient = new IPFSClient();
