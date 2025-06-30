import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaBox,
  FaStore,
  FaBook,
  FaMobileAlt,
  FaShoppingBag,
} from "react-icons/fa";

const HeaderToolbar = () => {
  return (
    <header className="w-full bg-[linear-gradient(to_right,_#cb43e7,_#f4a7de,_#f87ca7)] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between space-x-4 ">
        {/* Logo */}
        <div className="text-3xl font-bold lowercase tracking-wide text-white">
          <Link to="/"> Guardian
          </Link>
         
        </div>
        <div className="float-right items-center justify-between w-full">
          {/* Menu */}
          <div className="float-right flex items-center space-x-6 text-sm font-medium">
            <Link to="#" className="flex items-center gap-2 hover:underline">
              <FaBox />
              <span>Tra cứu đơn hàng</span>
            </Link>
            <Link to="#" className="flex items-center gap-2 hover:underline">
              <FaStore />
              <span>Hệ thống cửa hàng</span>
            </Link>
            <Link to="#" className="flex items-center gap-2 hover:underline">
              <FaBook />
              <span>Cẩm nang mua sắm</span>
            </Link>
          </div>

          <div className="float-right flex  items-center justify-between w-[90%] pt-[8px]">
            {/* Search */}
            <div className="flex-1 mx-4">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm text-gray-700">
                <FaSearch className="mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="ĐỒNG GIÁ 99K + VOUCHER 12% CHO ZA | Duy Nhất 25.04"
                  className="w-full outline-none placeholder:text-sm text-sm"
                />
              </div>
            </div>
            {/* Auth & Cart */}
            <div className="flex items-center space-x-2">
              <Link
                to="/login"
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition shadow text-white text-sm font-semibold"
              >
                <FaUserCircle />
                <span>Đăng nhập / Đăng ký </span>
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition shadow text-white text-sm font-semibold"
              >
                <FaShoppingBag />
                <div className="text-left leading-4">
                  <div className="text-xs opacity-80">GIỎ HÀNG</div>
                  <div className="text-sm font-bold">0 Sản phẩm</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderToolbar;
