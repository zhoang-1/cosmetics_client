import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-pink-50 text-gray-800">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4337/4337683.png" // biểu tượng mỹ phẩm
        alt="404 Not Found"
        className="w-32 h-31 mb-6"
      />
      <h1 className="text-5xl font-bold text-pink-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Không tìm thấy trang</h2>
      <p className="mb-6 text-center max-w-md text-gray-600">
        Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Đừng lo, chúng tôi vẫn còn rất nhiều sản phẩm tuyệt vời đang chờ bạn!
      </p>
      <button
        onClick={goHome}
        className="bg-pink-500 hover:bg-pink-600 transition text-white font-medium py-2 px-6 rounded-full shadow-md"
      >
        Về trang chủ
      </button>
    </div>
  );
};

export default NotFound;
