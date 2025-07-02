import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const formattedPrice = (price) =>
    Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group text-sm">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.discount && product.discountPercent && (
            <span className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-2 py-1 rounded-full font-bold shadow-md">
              -{product.discountPercent}%
            </span>
          )}

          {product.discount && product.saleEndTime && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-[10px] px-2 py-0.5 rounded shadow">
              <Countdown
                date={product.saleEndTime}
                renderer={({ hours, minutes, seconds, completed }) =>
                  completed
                    ? "00:00:00"
                    : `${String(hours).padStart(2, "0")}:${String(
                        minutes
                      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
                }
              />
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="font-medium text-gray-800 line-clamp-2 min-h-[38px]">
            {product.name}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <span className="text-pink-600 font-semibold">
              {formattedPrice(product.price)}
            </span>
            {product.discount && product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formattedPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-1.5 rounded-full text-sm font-medium transition">
            Mua ngay
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
