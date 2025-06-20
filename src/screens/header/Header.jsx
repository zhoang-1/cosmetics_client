import { Link } from "react-router-dom";
import HeaderToolbar from "./HeaderToolbar";
import ToolberBottom from "./ToolberBottom";
const Header = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-between items-center h-[35px] px-4 bg-gradient-to-r from-[#a5b7ff] to-[#f5f5f5]">
          <div className="font-bold text-gray-800">Cửa Hàng Vani Cosmetic.</div>
          <div className="header-right flex items-center">
            <Link
              to="tel:0246.2909098"
              className="flex items-center text-gray-800"
            >
              <i className="fa-sharp fa-solid fa-phone-flip fa-beat mr-2"></i>
              Mua hàng online: 0246.2909098
            </Link>
          </div>
        </div>
        <div>
          <HeaderToolbar />
        </div>
        <div>
          <ToolberBottom />
        </div>
      </div>
    </div>
  );
};

export default Header;
