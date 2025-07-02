import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {   removeFromCart } = useCart();
  const { cartItems = [] } = useCart();
  const navigate = useNavigate();

  const total = (cartItems || []).reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);  
    console.log("Giỏ hiện tại:", cartItems);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        🛒 Giỏ hàng của bạn đang trống.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        🛍️ Giỏ hàng của bạn
      </h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow p-5 gap-4"
          >
            <div className="flex items-center gap-4 w-full md:w-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border border-pink-100"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Giá: {item.price.toLocaleString()}₫
                </p>
                <p className="text-sm text-gray-500">
                  Số lượng: {item.quantity}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
              <button
                onClick={() =>
                  navigate(`/checkout?productId=${item.id}&qty=${item.quantity}`)
                }
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                Mua ngay
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-xl"
                title="Xóa khỏi giỏ"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6">
        <span className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
          Tổng cộng: {total.toLocaleString()}₫
        </span>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          Thanh toán tất cả
        </button>
      </div>
    </div>
  );
};

export default Cart;
