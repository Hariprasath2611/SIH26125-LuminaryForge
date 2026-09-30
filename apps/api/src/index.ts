import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes';
import auditRoutes from './routes/audit.routes';
import verifyRoutes from './routes/verify.routes';
import ipfsRoutes from './routes/ipfs.routes';
import assetRoutes from './routes/asset.routes';
import accessRoutes from './routes/access.routes';
import relayerRoutes from './routes/relayer.routes';
import securityRoutes from './routes/security.routes';
import { env } from './config/env';

// Graceful JSON serialization for BigInt (Prisma & Blockchain block numbers)
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const app = express();
const port = env.PORT;

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGINS.split(','),
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));

// Health and Readiness checks
app.get('/healthz', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/readyz', (req: Request, res: Response) => {
  res.status(200).json({ ready: true, service: 'bharosa-api' });
});

// v1 Routes
app.use(`${env.API_PREFIX}/auth`, authRoutes);
app.use(`${env.API_PREFIX}/verify`, verifyRoutes);
app.use(`${env.API_PREFIX}/audit`, auditRoutes);
app.use(`${env.API_PREFIX}/ipfs`, ipfsRoutes);
app.use(`${env.API_PREFIX}/assets`, assetRoutes);
app.use(`${env.API_PREFIX}/access`, accessRoutes);
app.use(`${env.API_PREFIX}/relayer`, relayerRoutes);
app.use(`${env.API_PREFIX}/security`, securityRoutes);
app.use(`${env.API_PREFIX}`, auditRoutes); // mounts /v1/dids/:id and /v1/stats
app.get(`${env.API_PREFIX}/me`, authRoutes);

// Uniform Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    code: err.code || 'INTERNAL_SERVER_ERROR',
    message: err.message || 'An unexpected error occurred',
    requestId: req.headers['x-request-id'] || 'req_none',
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`[Bharosa API] Running on port ${port} (${env.NODE_ENV})`);
  });
}

export default app;
