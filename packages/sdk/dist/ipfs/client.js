"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultIpfsClient = exports.IPFSClient = void 0;
const hash_1 = require("../crypto/hash");
class IPFSClient {
    gatewayUrl;
    memoryStore = new Map();
    constructor(config) {
        this.gatewayUrl = config?.gatewayUrl || 'https://gateway.pinata.cloud/ipfs/';
    }
    /**
     * Uploads raw bytes to IPFS or local simulated storage
     */
    async upload(data, filename = 'file.bin') {
        const hash = (0, hash_1.sha256Hex)(data);
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
    async fetch(cid) {
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
    async uploadJSON(obj) {
        const jsonStr = JSON.stringify(obj, null, 2);
        const data = new TextEncoder().encode(jsonStr);
        return this.upload(data, 'metadata.json');
    }
    /**
     * Fetches and parses JSON metadata by CID
     */
    async fetchJSON(cid) {
        const bytes = await this.fetch(cid);
        const jsonStr = new TextDecoder().decode(bytes);
        return JSON.parse(jsonStr);
    }
}
exports.IPFSClient = IPFSClient;
exports.defaultIpfsClient = new IPFSClient();
//# sourceMappingURL=client.js.map