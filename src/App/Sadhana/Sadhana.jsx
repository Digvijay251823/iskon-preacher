import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMyContext } from "../../store/context";

function Sadhana() {
  const { pathname } = useLocation();
  const { state } = useMyContext();
  return (
    <div>
      <div>
        <div
          className={`flex items-center gap-5 md:mx-10 mx-3 border-b md:w-max  ${
            state.Theme.Theme === "light"
              ? "border-b-gray-300"
              : "border-b-stone-700"
          }`}
        >
          <Link to={"/counseler/sadhana"}>
            <button
              className={`py-3 px-3 w-full ${
                pathname === "/counseler/sadhana"
                  ? "text-purple-700 border-b border-b-purple-700 "
                  : "text-stone-400"
              }`}
            >
              Sadhana List
            </button>
          </Link>
          <Link to={"/counseler/configure"}>
            <button
              className={`py-3 px-4 w-full ${
                pathname === "/counseler/configure"
                  ? "text-purple-700 border-b border-b-purple-700"
                  : "text-stone-400 "
              }`}
            >
              Configure Form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sadhana;
