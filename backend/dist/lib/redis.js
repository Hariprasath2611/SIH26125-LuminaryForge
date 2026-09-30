"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)({ name: 'bharosa:redis' });
class InMemoryStore {
    store = new Map();
    async get(key) {
        const item = this.store.get(key);
        if (!item)
            return null;
        if (item.expiresAt && Date.now() > item.expiresAt) {
            this.store.delete(key);
            return null;
        }
        return item.value;
    }
    async set(key, value, mode, duration) {
        let expiresAt;
        if (mode === 'EX' && duration) {
            expiresAt = Date.now() + duration * 1000;
        }
        this.store.set(key, { value, expiresAt });
        return 'OK';
    }
    async del(key) {
        return this.store.delete(key) ? 1 : 0;
    }
}
let client;
const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
if (process.env.NODE_ENV === 'test') {
    // Always use in-memory store in unit test environments
    client = new InMemoryStore();
}
else {
    try {
        const redis = new ioredis_1.default(redisUrl, {
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
        client = redis;
    }
    catch (err) {
        logger.warn('[Redis] Init failed, utilizing in-memory cache');
        client = new InMemoryStore();
    }
}
exports.cache = client;
