import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/routes';
const app = express();

app.use(express.json());
app.use(router);

export default app;