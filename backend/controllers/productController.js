import Product from '../models/productModel.js';
import { v4 as uuidv4 } from 'uuid';

export async function addProduct(productData) {
  const { name, description, price, category, size, imageUrl, sellerId, sellerName, sellerEmoji, pickupTimes } = productData;

  const newProduct = new Product({
    id: uuidv4(),
    name,
    description,
    price,
    category,
    size: size || null,
    imageUrl: imageUrl || null,
    sellerId,
    sellerName,
    sellerEmoji: sellerEmoji || null,
    pickupTimes: pickupTimes || [],
  });

  try {
    const result = await newProduct.save();
    return result;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

export async function getProductsBySeller(sellerId) {
  try {
    const products = await Product.find({ sellerId });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}