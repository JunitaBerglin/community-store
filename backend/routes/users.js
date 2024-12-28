import express from 'express';
import { addProduct, getProductsBySeller } from '../controllers/productController.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const result = await addProduct(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: 'Failed to add product' });
  }
});

router.get('/seller/:sellerId', async (req, res) => {
  try {
    const products = await getProductsBySeller(req.params.sellerId);
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch products' });
  }
});

export default router;