import { describe, it, expect } from 'vitest';
import { IPFSClient } from '../src/lib/ipfs';

describe('SDK IPFS Module', () => {
  const ipfs = new IPFSClient();

  it('uploads and fetches raw binary file data', async () => {
    const data = new TextEncoder().encode('Encrypted asset binary payload bytes');
    const result = await ipfs.upload(data, 'encrypted.bin');

    expect(result.cid.startsWith('bafk')).toBe(true);
    expect(result.size).toBe(data.length);
    expect(result.hash.startsWith('0x')).toBe(true);

    const fetched = await ipfs.fetch(result.cid);
    expect(fetched).toEqual(data);
  });

  it('uploads and parses JSON metadata', async () => {
    const metadata = {
      name: 'Degree Certificate',
      mimeType: 'application/pdf',
      version: 1,
      encrypted: true,
    };

    const result = await ipfs.uploadJSON(metadata);
    expect(result.cid).toBeDefined();

    const fetched = await ipfs.fetchJSON<typeof metadata>(result.cid);
    expect(fetched).toEqual(metadata);
  });
});
