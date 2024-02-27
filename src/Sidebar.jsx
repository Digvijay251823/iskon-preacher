import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 fixed left-0 top-0">
      <ul className="mt-20">
        <li className="py-2">
          <Link to={"/"}>
            <p
              className={`${
                pathname === "/" ? "bg-gray-700" : ""
              } w-full px-4 py-2 hover:bg-gray-700`}
            >
              Dashboard
            </p>
          </Link>
        </li>
        <li className="py-2">
          <Link to={"/counselor"}>
            <p
              className={`${
                pathname === "/counselor" ? "bg-gray-700" : ""
              } w-full px-4 py-2 hover:bg-gray-700`}
            >
              Counselor
            </p>
          </Link>
        </li>
        <li className="py-2">
          <Link to={"/counselee"}>
            <p
              className={`${
                pathname === "/counselee" ? "bg-gray-700" : ""
              } w-full px-4 py-2 hover:bg-gray-700`}
            >
              Counselee
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
