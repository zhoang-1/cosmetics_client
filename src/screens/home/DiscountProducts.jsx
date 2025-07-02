import React from "react";
import ProductCard from "../../component/ProductCard";

const DiscountProducts = ({ products }) => {
  const discounted = products.filter((p) => p.discount);

  if (discounted.length === 0) return null;

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
          🔥 Sản phẩm đang giảm giá
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {discounted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
