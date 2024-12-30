import { useRouter } from "@tanstack/react-router";
import React from "react";

const Card = ({ product, onReadMore }) => (
  <div
    className={`card w-48 hover:shadow-none items-center h-max ${product.bgColor} border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white`}
  >
    <div className="px-6 py-5 text-left h-full">
      <p className="text-base mb-4">{product.name}</p>
      <h1 className="text-[32px] mb-4">${product.price.toFixed(2)}</h1>
      <p className="text-xs mb-4 line-clamp-4">{product.description}</p>
      <button
        onClick={() => onReadMore(product.id)}
        className="cursor-pointer bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
      >
        Read More
      </button>
    </div>
  </div>
);

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  bgColor: string;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const router = useRouter();

  const handleReadMore = (productId) => {
    router.navigate({
      to: `/product/${productId}`,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Card key={product.id} product={product} onReadMore={handleReadMore} />
      ))}
    </div>
  );
};

export { ProductsPage };
