import express from 'express';
import cors from 'cors';
import { data } from './data.js';

const app = express();
const ip = 'localhost';
const port = process.env.PORT || 5000;

app.use(cors());
app.get('/api/products', (_req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Running at http://${ip}:${port}`);
});
