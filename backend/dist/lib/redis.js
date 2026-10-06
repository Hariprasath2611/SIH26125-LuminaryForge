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
class ResilientCache {
    inMemory = new InMemoryStore();
    redisClient = null;
    isConnected = false;
    constructor() {
        const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
        if (process.env.NODE_ENV !== 'test') {
            try {
                const r = new ioredis_1.default(redisUrl, {
                    maxRetriesPerRequest: 1,
                    lazyConnect: true,
                    retryStrategy(times) {
                        if (times > 2)
                            return null;
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
            }
            catch (err) {
                this.isConnected = false;
                logger.info('[Redis] Using in-memory fallback cache');
            }
        }
    }
    async get(key) {
        if (this.isConnected && this.redisClient) {
            try {
                return await this.redisClient.get(key);
            }
            catch {
                return this.inMemory.get(key);
            }
        }
        return this.inMemory.get(key);
    }
    async set(key, value, mode, duration) {
        if (this.isConnected && this.redisClient) {
            try {
                if (mode === 'EX' && duration) {
                    return await this.redisClient.set(key, value, 'EX', duration);
                }
                return await this.redisClient.set(key, value);
            }
            catch {
                return this.inMemory.set(key, value, mode, duration);
            }
        }
        return this.inMemory.set(key, value, mode, duration);
    }
    async del(key) {
        if (this.isConnected && this.redisClient) {
            try {
                return await this.redisClient.del(key);
            }
            catch {
                return this.inMemory.del(key);
            }
        }
        return this.inMemory.del(key);
    }
}
exports.cache = new ResilientCache();
