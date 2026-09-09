import express from 'express';
import healthRoutes from './routes/healthRoutes.js';
import accountRoutes from './routes/accountRoutes.js';

const app = express();

app.use(express.json());

// Registro das rotas
app.use(healthRoutes);
app.use(accountRoutes);

export default app;