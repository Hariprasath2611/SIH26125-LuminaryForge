// Resilient In-Memory Fallback for Database Mirror when Postgres is offline or during testing

export interface InMemAuditEvent {
  id: string;
  eventType: string;
  actor: string;
  target?: string | null;
  txHash?: string | null;
  blockNumber?: bigint | null;
  payload: any;
  timestamp: Date;
}

class InMemoryDbMirror {
  public auditEvents: InMemAuditEvent[] = [
    {
      id: 'demo-audit-1',
      eventType: 'SYSTEM_INITIALIZED',
      actor: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      target: 'BharosaRegistry',
      txHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      blockNumber: 1n,
      payload: { platform: 'Bharosa', chainId: 31337 },
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 'demo-audit-2',
      eventType: 'ISSUER_ADDED',
      actor: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      target: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      txHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
      blockNumber: 2n,
      payload: { issuerName: 'Delhi Technological University' },
      timestamp: new Date(Date.now() - 1800000),
    },
  ];

  public dids = new Map<string, any>();
  public assets = new Map<string, any>();
  public credentials = new Map<string, any>();
  public grants = new Map<string, any>();
  public requests = new Map<string, any>();
}

export const inMemoryDb = new InMemoryDbMirror();
