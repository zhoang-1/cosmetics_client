import React, { useState, useEffect } from "react";
import {
  FaMoneyBillWave,
  FaUniversity,
  FaCreditCard,
  FaQrcode,
  FaMobileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAddress } from "./address/AddressContext";

const paymentMethods = [
  {
    id: "cod",
    label: "Thanh toán khi nhận hàng (COD)",
    icon: <FaMoneyBillWave className="text-green-600" />,
  },
  {
    id: "momo",
    label: "Ví MoMo",
    icon: <FaMobileAlt className="text-pink-500" />,
  },
  {
    id: "vnpay",
    label: "VNPAY",
    icon: <FaQrcode className="text-blue-500" />,
  },
  {
    id: "bank",
    label: "Ngân hàng nội địa (ATM)",
    icon: <FaUniversity className="text-indigo-600" />,
  },
  {
    id: "visa",
    label: "Thẻ tín dụng/Ghi nợ (Visa/Mastercard)",
    icon: <FaCreditCard className="text-yellow-600" />,
  },
];

const qrImages = {
  momo: "/images/qr-momo.png",
  vnpay: "/images/qr-vnpay.png",
};

const Checkout = () => {
  const [method, setMethod] = useState("cod");
  const { address } = useAddress();
  const navigate = useNavigate();

  // Kiểm tra nếu không có địa chỉ thì chuyển sang trang tạo địa chỉ
  useEffect(() => {
    if (!address) {
      navigate("/add-address");
    }
  }, [address, navigate]);

  const handlePlaceOrder = () => {
    if (method === "cod") {
      alert("✅ Bạn đã chọn thanh toán khi nhận hàng.");
    } else {
      alert(`📱 Vui lòng quét mã QR để thanh toán bằng ${method.toUpperCase()}`);
    }
  };

  if (!address) return null; // Ngăn render nếu chưa có địa chỉ

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-pink-600 text-center">
        💳 Phương thức thanh toán
      </h1>

      {/* Địa chỉ giao hàng */}
      <div className="bg-white p-5 rounded-xl shadow mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          📍 Địa chỉ giao hàng
        </h2>
        <div className="text-gray-800 leading-relaxed">
          <p>
            <strong>{address.name}</strong> | {address.phone}
          </p>
          <p className="text-sm text-gray-600">{address.location}</p>
        </div>
        <button
          onClick={() => navigate("/add-address")}
          className="mt-3 text-pink-500 text-sm hover:underline"
        >
          ✏️ Thay đổi địa chỉ
        </button>
      </div>

      {/* Chọn phương thức thanh toán */}
      <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          💰 Chọn hình thức thanh toán:
        </h2>
        <div className="grid gap-4">
          {paymentMethods.map((item) => (
            <label
              key={item.id}
              className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition ${
                method === item.id
                  ? "border-pink-500 bg-pink-50"
                  : "hover:border-pink-300"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={item.id}
                checked={method === item.id}
                onChange={() => setMethod(item.id)}
                className="accent-pink-500 hidden"
              />
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium text-gray-700">{item.label}</span>
            </label>
          ))}
        </div>

        {/* QR nếu là MoMo hoặc VNPAY */}
        {["momo", "vnpay"].includes(method) && qrImages[method] && (
          <div className="text-center mt-6">
            <h3 className="text-gray-700 mb-2 font-semibold">
              📲 Quét mã QR để thanh toán với{" "}
              <span className="uppercase">{method}</span>
            </h3>
            <img
              src={qrImages[method]}
              alt={`QR ${method}`}
              className="w-64 h-64 mx-auto border rounded-xl shadow"
            />
          </div>
        )}

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition duration-300"
        >
          ✅ Xác nhận đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Checkout;
