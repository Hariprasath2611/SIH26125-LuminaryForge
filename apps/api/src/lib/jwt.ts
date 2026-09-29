import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface UserPayload {
  address: string;
  chainId: number;
}

export function signAccessToken(payload: UserPayload): string {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRY,
  });
}

export function signRefreshToken(payload: UserPayload): string {
  return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
    expiresIn: env.REFRESH_TOKEN_EXPIRY,
  });
}

export function verifyAccessToken(token: string): UserPayload {
  return jwt.verify(token, env.JWT_SECRET) as UserPayload;
}

export function verifyRefreshToken(token: string): UserPayload {
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET) as UserPayload;
}
