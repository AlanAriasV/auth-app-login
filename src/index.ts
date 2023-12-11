import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import apiRouter from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (_, res) => {
  res.send('Login Server!');
});

app.use('/api', apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
