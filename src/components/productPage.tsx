import { useRouter } from "@tanstack/react-router";
import React from "react";

interface ProductPageProps {
  productId: number;
  sellerId: number;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId, sellerId }) => {
  const router = useRouter();

  if (!productId) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    router.navigate({
      to: `/seller/${sellerId}`,
    });
  };

  // 'Mock product data' for demonstration purposes
  const product = {
    id: productId,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    imageUrl: "/default-product-image.jpg",
  };

  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <img
        src={product.imageUrl || "/default-product-image.jpg"}
        alt={product.name}
        className="w-full h-auto mb-4 rounded"
      />
      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-2">{product.description}</p>
      <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={handleBuyNow}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Buy Now
      </button>
    </div>
  );
};

export { ProductPage };
