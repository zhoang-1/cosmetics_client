import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../utils/category";
import "./Header.css";

const ToolbarBottom = () => {
  const [indexChildShow, setIndexChildShow] = useState(null);

  return (
    <div className="w-full  text-white shadow">
      <div className=" mx-auto relative">
        <ul className="flex items-center justify-between bg-[#f5519d] text-black">
          {categories?.map((main, i) => (
            <li
              key={i}
              className="static px-4 py-2  cursor-pointer group"
            >
              <Link to={main.link} className="text-sm font-semibold">
                {main.name}
                {main?.parent?.length > 0 && (
                  <i className="fa fa-angle-down ml-1" />
                )}
              </Link>
                
              {/* Dropdown hiển thị đúng vị trí dưới từng mục */}
              {main?.parent?.length > 0 && (
                <div className="menu_dropdown  invisible group-hover:visible  transition-opacity duration-200">
                  <div className="w-[90%] mx-auto my-0 flex justify-start flex-wrap ">
                    <ul className="w-1/4 border-r border-white pr-4">
                      {main.parent.map((parent, j) => (
                        <li
                          key={j}
                          className={`relative   ${
                            indexChildShow === j ? "px-4 py-2 cursor-pointer  text-black font-semibold bg-[#f791d5]" : "flex items-center px-4 py-2 cursor-pointer hover:bg-[#fafafa] hover:text-purple-400"
                          }`}
                          onMouseEnter={() => setIndexChildShow(j)}
                        >
                          <span>{parent.name}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex  w-[70%] pr-4 flex-wrap">
                      {typeof indexChildShow === "number" &&
                        main.parent[indexChildShow]?.children?.map(
                          (child, k) => (
                            <li key={k} className="px-4 pr-4">
                              <Link
                                to={child.link}
                                className="text-sm text-black font-semibold hover:underline"
                              >
                                {child.name}
                              </Link>
                              {child.grandchildren?.length > 0 && (
                                <ul className="pl-4 ">
                                  {child.grandchildren.map((grand, g) => (
                                    <li key={g} className="py-2">
                                      <Link
                                        to={grand.link}
                                        className="text-sm text-black hover:underline"
                                      >
                                        {grand.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToolbarBottom;
