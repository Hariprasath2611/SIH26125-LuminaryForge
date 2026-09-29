import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes';
import { env } from './config/env';

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
