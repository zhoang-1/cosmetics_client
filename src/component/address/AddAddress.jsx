import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "./AddressContext";

const AddAddress = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "" });
  const { setAddress } = useAddress();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(form); // Lưu vào context
    navigate("/checkout"); // Quay lại trang giao dịch
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-pink-600 mb-6 text-center">
        ➕ Thêm địa chỉ giao hàng
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Họ tên người nhận"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Địa chỉ giao hàng chi tiết"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600"
        >
          Lưu và quay lại thanh toán
        </button>
      </form>
    </div>
  );
};

export default AddAddress;
