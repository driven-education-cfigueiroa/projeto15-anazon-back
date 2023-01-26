import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (_req, res) => {
  const products = await Product.find({});
  res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

productRouter.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default productRouter;
