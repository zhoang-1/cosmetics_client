import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../utils/category";
import "./Header.css";

const ToolbarBottom = () => {
  const [indexChildShow, setIndexChildShow] = useState(null);

  return (
    <div className="w-full bg-gradient-to-r from-[#326e51] via-[#b0dbb9] to-[#32ac71] text-white shadow">
      <div className="max-w-7xl mx-auto relative">
        <ul className="flex items-center justify-between bg-[#326e51] text-white">
          {categories?.map((main, i) => (
            <li
              key={i}
              className="relative px-4 py-2 hover:bg-[#2a5d47] cursor-pointer group"
            >
              <Link to={main.link} className="text-sm font-semibold">
                {main.name}
                {main?.parent?.length > 0 && (
                  <i className="fa fa-angle-down ml-1" />
                )}
              </Link>

              {/* Dropdown hiển thị đúng vị trí dưới từng mục */}
              {main?.parent?.length > 0 && (
                <div className="menu_dropdown absolute invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap">
                    <ul className="w-1/4 border-r border-white pr-4">
                      {main.parent.map((parent, j) => (
                        <li
                          key={j}
                          className={`px-4 py-2 cursor-pointer hover:bg-[#3b7a5f] ${
                            indexChildShow === j ? "bg-[#3b7a5f]" : ""
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
                                className="text-sm text-amber-300 hover:underline"
                              >
                                {child.name}
                              </Link>
                              {child.grandchildren?.length > 0 && (
                                <ul className="pl-4 ">
                                  {child.grandchildren.map((grand, g) => (
                                    <li key={g} className="py-2">
                                      <Link
                                        to={grand.link}
                                        className="text-sm text-white hover:underline"
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
