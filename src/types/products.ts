export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  size?: string;
  imageUrl: string;
  sellerId: string;
  sellerName: string;
  sellerEmoji: string;
  isSold: boolean;
  createdAt: Date;
  pickupTimes?: string[];
};
