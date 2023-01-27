import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/amazona'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const app = express();
const ip = 'localhost';
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Running at http://${ip}:${port}`);
  });
});
