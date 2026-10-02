import Redis from 'ioredis';
import pino from 'pino';

const logger = pino({ name: 'bharosa:redis' });

class InMemoryStore {
  private store = new Map<string, { value: string; expiresAt?: number }>();

  async get(key: string): Promise<string | null> {
    const item = this.store.get(key);
    if (!item) return null;
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }

  async set(key: string, value: string, mode?: string, duration?: number): Promise<'OK'> {
    let expiresAt: number | undefined;
    if (mode === 'EX' && duration) {
      expiresAt = Date.now() + duration * 1000;
    }
    this.store.set(key, { value, expiresAt });
    return 'OK';
  }

  async del(key: string): Promise<number> {
    return this.store.delete(key) ? 1 : 0;
  }
}

export type CacheClient = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, mode?: string, duration?: number): Promise<string | null>;
  del(key: string): Promise<number>;
};

class ResilientCache implements CacheClient {
  private inMemory = new InMemoryStore();
  private redisClient: Redis | null = null;
  private isConnected = false;

  constructor() {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

    if (process.env.NODE_ENV !== 'test') {
      try {
        const r = new Redis(redisUrl, {
          maxRetriesPerRequest: 1,
          lazyConnect: true,
          retryStrategy(times) {
            if (times > 2) return null;
            return Math.min(times * 100, 500);
          },
        });

        r.on('connect', () => {
          this.isConnected = true;
          logger.info('[Redis] Connected successfully');
        });

        r.on('error', () => {
          this.isConnected = false;
        });

        r.on('close', () => {
          this.isConnected = false;
        });

        r.connect().catch(() => {
          this.isConnected = false;
          logger.info('[Redis] Standalone Redis not available, using in-memory fallback cache');
        });

        this.redisClient = r;
      } catch (err) {
        this.isConnected = false;
        logger.info('[Redis] Using in-memory fallback cache');
      }
    }
  }

  async get(key: string): Promise<string | null> {
    if (this.isConnected && this.redisClient) {
      try {
        return await this.redisClient.get(key);
      } catch {
        return this.inMemory.get(key);
      }
    }
    return this.inMemory.get(key);
  }

  async set(key: string, value: string, mode?: string, duration?: number): Promise<string | null> {
    if (this.isConnected && this.redisClient) {
      try {
        if (mode === 'EX' && duration) {
          return await this.redisClient.set(key, value, 'EX', duration);
        }
        return await this.redisClient.set(key, value);
      } catch {
        return this.inMemory.set(key, value, mode, duration);
      }
    }
    return this.inMemory.set(key, value, mode, duration);
  }

  async del(key: string): Promise<number> {
    if (this.isConnected && this.redisClient) {
      try {
        return await this.redisClient.del(key);
      } catch {
        return this.inMemory.del(key);
      }
    }
    return this.inMemory.del(key);
  }
}

export const cache: CacheClient = new ResilientCache();
