import React from "react";
import { Link } from "react-router-dom";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row pb-2 gap-3 text-gray-500 text-lg sm:text-xl cursor-pointer">
          <Link
            to="mailto:umarsidd9540@gmail.com"
            target="blank"
            className="ri-mail-line hover:text-[#f5f5f5]"
          ></Link>
          <Link
            to="https://www.linkedin.com/in/mohd-umar-siddiqui-34012622b/"
            target="blank"
            className="ri-linkedin-box-fill hover:text-[#f5f5f5]"
          ></Link>
          <Link
            to="https://github.com/umar-9540"
            target="blank"
            className="ri-github-fill hover:text-[#f5f5f5]"
          ></Link>
          <Link
            to="https://leetcode.com/u/Mohd_Umar_Siddiqui/"
            target="blank"
            className="ri-code-box-fill hover:text-[#f5f5f5]"
          ></Link>
          <Link className="ri-instagram-line hover:text-[#f5f5f5]"></Link>
        </div>

        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
