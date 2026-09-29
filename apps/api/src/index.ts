import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGINS?.split(',') || 'http://localhost:3000' }));
app.use(express.json({ limit: '10mb' }));

app.get('/healthz', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/readyz', (req, res) => {
  res.json({ ready: true, service: 'bharosa-api' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`[Bharosa API] Running on port ${port}`);
  });
}

export default app;
