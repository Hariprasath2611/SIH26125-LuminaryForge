"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Check local backend .env first, then root .env
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../../../.env') });
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().default(3001),
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    API_PREFIX: zod_1.z.string().default('/v1'),
    CORS_ORIGINS: zod_1.z.string().default('http://localhost:3000,https://bharosa.vercel.app'),
    DEMO_MODE: zod_1.z.preprocess((val) => val === 'true' || val === true || val === undefined, zod_1.z.boolean()).default(true),
    DATABASE_URL: zod_1.z.string().default('postgresql://bharosa_user:bharosa_password@localhost:5432/bharosa_db?schema=public'),
    REDIS_URL: zod_1.z.string().default('redis://localhost:6379'),
    JWT_SECRET: zod_1.z.string().min(32).default('bharosa_super_secure_jwt_secret_key_minimum_32_characters_siwe_auth'),
    JWT_EXPIRY: zod_1.z.string().default('15m'),
    REFRESH_TOKEN_SECRET: zod_1.z.string().min(32).default('bharosa_super_secure_refresh_secret_key_rotation_token_32_chars'),
    REFRESH_TOKEN_EXPIRY: zod_1.z.string().default('7d'),
    SIWE_DOMAIN: zod_1.z.string().default('localhost:3000'),
    SIWE_URI: zod_1.z.string().default('http://localhost:3000'),
    RPC_URL: zod_1.z.string().default('http://127.0.0.1:8545'),
    CHAIN_ID: zod_1.z.coerce.number().default(31337),
    RELAYER_PRIVATE_KEY: zod_1.z.string().default('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'),
    PINATA_JWT: zod_1.z.string().optional(),
});
exports.env = envSchema.parse(process.env);
