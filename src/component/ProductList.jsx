import React, { useState } from "react";
import ProductCard from "./ProductCard";

const allProducts = [
  {
    id: 1,
    name: "Son dưỡng",
    price: 120000,
    originalPrice: 150000,
    discount: true,
    category: "Trang điểm",
    image: "https://via.placeholder.com/300x200?text=Son",
  },
  {
    id: 2,
    name: "Kem chống nắng",
    price: 200000,
    discount: false,
    category: "Chăm sóc da",
    image: "https://via.placeholder.com/300x200?text=Kem",
  },
  {
    id: 3,
    name: "Sữa rửa mặt",
    price: 170000,
    discount: false,
    category: "Chăm sóc da",
    image: "https://via.placeholder.com/300x200?text=Sữa",
  },
  {
    id: 4,
    name: "Phấn phủ kiềm dầu",
    price: 250000,
    discount: false,
    category: "Trang điểm",
    image: "https://via.placeholder.com/300x200?text=Phấn",
  },
  {
    id: 5,
    name: "Toner dịu nhẹ",
    price: 180000,
    discount: false,
    category: "Nước hoa hồng",
    image: "https://via.placeholder.com/300x200?text=Toner",
  },
  {
    id: 6,
    name: "Mặt nạ giấy",
    price: 90000,
    originalPrice: 120000,
    discount: true,
    category: "Mặt nạ",
    image: "https://via.placeholder.com/300x200?text=Mặt+nạ",
  },
];

const categories = [
  "Tất cả",
  "Trang điểm",
  "Chăm sóc da",
  "Nước hoa hồng",
  "Mặt nạ",
];
const priceRanges = [
  { label: "Tất cả", min: 0, max: Infinity },
  { label: "Dưới 150.000", min: 0, max: 150000 },
  { label: "150.000 - 200.000", min: 150000, max: 200000 },
  { label: "Trên 200.000", min: 200000, max: Infinity },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPrice, setSelectedPrice] = useState("Tất cả");
  const [onlyDiscount, setOnlyDiscount] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "Tất cả" || product.category === selectedCategory;

    const priceRange = priceRanges.find((p) => p.label === selectedPrice);
    const matchPrice =
      !priceRange ||
      (product.price >= priceRange.min && product.price <= priceRange.max);

    const matchDiscount = !onlyDiscount || product.discount;

    return matchCategory && matchPrice && matchDiscount;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Thanh lọc nâng cao */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Lọc danh mục */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Danh mục
          </label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Lọc theo giá */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Khoảng giá
          </label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            {priceRanges.map((range) => (
              <option key={range.label}>{range.label}</option>
            ))}
          </select>
        </div>

        {/* Chỉ ưu đãi */}
        <div className="flex items-center mt-6 md:mt-0">
          <input
            type="checkbox"
            id="discountOnly"
            checked={onlyDiscount}
            onChange={(e) => setOnlyDiscount(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="discountOnly" className="text-gray-700 font-medium">
            Chỉ sản phẩm giảm giá
          </label>
        </div>
      </div>

      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Sản phẩm
      </h2>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts
           .slice(0, 9) // 👈 giới hạn 6 sản phẩm
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11337/11337957.png"
              alt="No cosmetics found"
              className="mx-auto w-28 h-28 opacity-70 mb-4"
            />
            <p className="text-lg text-pink-600 font-semibold">
              Không tìm thấy sản phẩm phù hợp
            </p>
            <p className="text-sm text-gray-400">
              Thử thay đổi bộ lọc hoặc làm mới trang để xem thêm sản phẩm.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
