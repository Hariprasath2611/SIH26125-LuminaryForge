import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

// Check local backend .env first, then root .env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  API_PREFIX: z.string().default('/v1'),
  CORS_ORIGINS: z.string().default('http://localhost:3000,https://bharosa.vercel.app'),
  DEMO_MODE: z.preprocess((val) => val === 'true' || val === true || val === undefined, z.boolean()).default(true),

  DATABASE_URL: z.string().default('postgresql://bharosa_user:bharosa_password@localhost:5432/bharosa_db?schema=public'),
  REDIS_URL: z.string().default('redis://localhost:6379'),

  JWT_SECRET: z.string().min(32).default('bharosa_super_secure_jwt_secret_key_minimum_32_characters_siwe_auth'),
  JWT_EXPIRY: z.string().default('15m'),
  REFRESH_TOKEN_SECRET: z.string().min(32).default('bharosa_super_secure_refresh_secret_key_rotation_token_32_chars'),
  REFRESH_TOKEN_EXPIRY: z.string().default('7d'),

  SIWE_DOMAIN: z.string().default('localhost:3000'),
  SIWE_URI: z.string().default('http://localhost:3000'),

  RPC_URL: z.string().default('http://127.0.0.1:8545'),
  CHAIN_ID: z.coerce.number().default(31337),
  RELAYER_PRIVATE_KEY: z.string().default('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'),

  PINATA_JWT: z.string().optional(),
  SERVE_FRONTEND: z.preprocess((val) => val === 'true' || val === true, z.boolean()).default(false),
});

export const env = envSchema.parse(process.env);
