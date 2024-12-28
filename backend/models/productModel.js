import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: null, 
  },
  imageUrl: {
    type: String,
    default: null,
  },
  sellerId: {
    type: String,
    required: true,
  },
  sellerName: {
    type: String,
    required: true,
  },
  sellerEmoji: {
    type: String,
    default: null, 
  },
  isSold: {
    type: Boolean,
    default: false, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  pickupTimes: {
    type: [String],
    default: [], 
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
