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

let client: CacheClient;

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

if (process.env.NODE_ENV === 'test') {
  // Always use in-memory store in unit test environments
  client = new InMemoryStore();
} else {
  try {
    const redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 1,
      retryStrategy(times) {
        if (times > 3) {
          logger.warn('[Redis] Connection failed, switching to in-memory fallback cache');
          return null; // stop retrying and fallback
        }
        return Math.min(times * 100, 1000);
      },
    });

    redis.on('error', (err) => {
      logger.warn({ err: err.message }, '[Redis] Error occurred');
    });

    client = redis as unknown as CacheClient;
  } catch (err) {
    logger.warn('[Redis] Init failed, utilizing in-memory cache');
    client = new InMemoryStore();
  }
}

export const cache = client;
