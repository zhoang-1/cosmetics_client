import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../utils/cartProducts";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product)
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        ❌ Sản phẩm không tồn tại.
      </div>
    );

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });

    toast(
      ({ closeToast }) => (
        <div className="flex items-center gap-3">
          <img
            src={product.image}
            alt="thumb"
            className="w-12 h-12 rounded object-cover border border-pink-200"
          />
          <div>
            <p className="font-semibold text-gray-800">🎉 Đã thêm vào giỏ</p>
            <p className="text-sm text-gray-600">{product.name}</p>
          </div>
        </div>
      ),
      {
        autoClose: 2500,
        className: "!rounded-xl !shadow-lg bg-white",
        bodyClassName: "!text-gray-700",
      }
    );
  };

  const tabClasses = (tab) =>
    `px-4 py-2 font-medium border-b-2 transition ${
      activeTab === tab
        ? "border-pink-500 text-pink-600"
        : "border-transparent text-gray-500 hover:text-pink-500"
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl mt-6">
      {/* Ảnh sản phẩm */}
      <div className="flex justify-center items-start">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full max-w-md object-cover shadow-md border border-pink-100"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl font-extrabold text-pink-600">
            {product.price.toLocaleString()}₫
          </span>
          {product.originalPrice && (
            <span className="line-through text-gray-400 text-lg">
              {product.originalPrice.toLocaleString()}₫
            </span>
          )}
          {product.discountPercent && (
            <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              -{product.discountPercent}%
            </span>
          )}
        </div>

        <p className="text-gray-700 mb-4">
          Sản phẩm chăm sóc da cao cấp, dịu nhẹ và phù hợp với mọi loại da. Được
          chiết xuất từ thành phần thiên nhiên, giúp bạn rạng ngời và tự tin mỗi
          ngày.
        </p>

        {/* Chọn số lượng */}
        <div className="mb-4 flex items-center gap-4">
          <span className="text-gray-700 font-medium">Số lượng:</span>
          <div className="flex items-center border rounded-full px-3 py-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-gray-600 px-2 hover:text-pink-500"
            >
              −
            </button>
            <span className="mx-2 w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-gray-600 px-2 hover:text-pink-500"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-evenly space-y-4">
          <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full font-semibold transition duration-300 shadow-lg mb-6">
            🛒 Mua ngay
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full font-semibold transition duration-300 shadow-lg mb-6"
          >
            🛍️ Thêm vào giỏ
          </button>
        </div>
        {/* Thêm vào giỏ */}

        {/* Tabs */}
        <div>
          <div className="flex space-x-6 border-b mb-4">
            <button
              onClick={() => setActiveTab("description")}
              className={tabClasses("description")}
            >
              Mô tả
            </button>
            <button
              onClick={() => setActiveTab("ingredients")}
              className={tabClasses("ingredients")}
            >
              Thành phần
            </button>
            <button
              onClick={() => setActiveTab("usage")}
              className={tabClasses("usage")}
            >
              Cách dùng
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={tabClasses("reviews")}
            >
              Đánh giá
            </button>
          </div>

          {activeTab === "description" && (
            <div className="text-gray-700 leading-relaxed">
              <p>
                <strong>{product.name}</strong> là sản phẩm mỹ phẩm chất lượng
                cao, giúp làm dịu, dưỡng ẩm sâu và bảo vệ làn da khỏi các tác
                nhân bên ngoài. Đã được kiểm định và khuyên dùng bởi các chuyên
                gia da liễu.
              </p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="text-gray-700 leading-relaxed space-y-1">
              <p>
                <strong>Chiết xuất:</strong> Hoa hồng hữu cơ, lô hội, vitamin E
              </p>
              <p>
                <strong>Không chứa:</strong> Paraben, cồn khô, dầu khoáng
              </p>
            </div>
          )}

          {activeTab === "usage" && (
            <div className="text-gray-700 leading-relaxed">
              <p>
                Rửa sạch mặt, sau đó thoa đều sản phẩm lên da mỗi sáng và tối.
                Massage nhẹ để sản phẩm thẩm thấu tốt hơn.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-700">
              <p className="italic text-sm text-gray-500">
                Hiện chưa có đánh giá nào. Hãy là người đầu tiên đánh giá sản
                phẩm!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
