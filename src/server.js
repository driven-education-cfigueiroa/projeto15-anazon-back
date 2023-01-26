import express from 'express';
import cors from 'cors';
import { data } from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();
mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/amazona'
    );
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
}

const app = express();
const ip = 'localhost';
const port = process.env.PORT || 5000;

app.use(cors());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

await connect();

app.listen(port, () => {
  console.log(`Running at http://${ip}:${port}`);
});
