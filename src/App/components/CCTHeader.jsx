import React, { useEffect, useRef, useState } from "react";
import { useMyContext } from "../../store/context";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineQrCodeScanner,
} from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { FiSun } from "react-icons/fi";

function CCTHeader() {
  const { state, dispatch } = useMyContext();
  const { pathname } = useLocation();
  const [isSelectionOpen, setSelectionOpen] = useState(false);

  const StoreTheme = (theme) => {
    localStorage.setItem("THEME", theme);
  };
  return (
    <header
      className={
        pathname.startsWith(`/sadhana`) ||
        pathname.startsWith("/register") ||
        pathname.startsWith("/activity") ||
        pathname.startsWith(`/attendance`) ||
        pathname.startsWith(`/rsvp`)
          ? "hidden"
          : "block"
      }
    >
      <div
        className={`px-5 flex items-center justify-between border-b ${
          state.Theme.Theme === "light"
            ? "bg-white text-gray-700 border-gray-200"
            : "bg-stone-950 text-white border-stone-700"
        }`}
      >
        <div className="flex items-center justify-center py-3 lg:hidden">
          <MenuIconAndDropDown
            isSelectionOpen={isSelectionOpen}
            toggleSelection={(value) => setSelectionOpen(value)}
          />
        </div>
        <nav className="text-lg lg:block hidden">
          <ul className="flex items-center gap-5">
            <Link to={"/cct/analytics"}>
              <li
                className={`px-4 py-5 text-lg transition-colors duration-500 
          ${
            pathname === "/cct/analytics"
              ? "border-b border-b-purple-700 text-purple-700"
              : ""
          }
          `}
              >
                Analytics
              </li>
            </Link>
            <Link to={"/cct/counselers"}>
              <li
                className={`px-4 py-5 text-lg transition-colors duration-500 
          ${
            pathname === "/cct/counselers"
              ? "border-b border-b-purple-700 text-purple-700"
              : ""
          }
          `}
              >
                counselers
              </li>
            </Link>
            <Link to={"/cct/sessions"}>
              <li
                className={`px-4 py-5 text-lg transition-colors duration-500 
          ${
            pathname === "/cct/sessions"
              ? "border-b border-b-purple-700 text-purple-700"
              : ""
          }
          `}
              >
                CBM Sessions
              </li>
            </Link>
            <Link to={"/cct/seva"}>
              <li
                className={`px-4 py-5 text-lg transition-colors duration-500 
          ${
            pathname === "/cct/seva"
              ? "border-b border-b-purple-700 text-purple-700"
              : ""
          }
          `}
              >
                Seva
              </li>
            </Link>
            <Link to={"/cct/attendance"}>
              <li
                className={`px-4 py-5 text-lg transition-colors duration-500 
          ${
            pathname === "/cct/attendance"
              ? "border-b border-b-purple-700 text-purple-700"
              : ""
          }
          `}
              >
                CBM Attendance
              </li>
            </Link>

            <Link to={"/cct/scan"}>
              <li
                className={`px-4 py-5 text-lg transition-colors duration-500 flex items-center gap-3 
          ${
            pathname === "/cct/scan"
              ? "border-b border-b-purple-700 text-purple-700"
              : ""
          }
          `}
              >
                <MdOutlineQrCodeScanner className="text-xl" />
                Sanner
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          {state?.Theme?.Theme === "light" ? (
            <button
              onClick={() => {
                dispatch({ type: "DARK" });
                StoreTheme("DARK");
              }}
              className="p-2 border bg-white rounded-xl"
            >
              <IoMdMoon size={24} />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: "LIGHT" });
                StoreTheme("LIGHT");
              }}
              className="p-2 border bg-stone-800 rounded-xl border-stone-700 text-yellow-300"
            >
              <FiSun size={24} />
            </button>
          )}
          {!state.Authentication.isAuthenticated ? (
            <Link to={"/auth/signin"}>
              <button
                className={`px-5 py-1.5 text-lg rounded-xl border-2 shadow ${
                  state.Theme.Theme === "light"
                    ? "border-gray-600"
                    : "border-stone-600"
                }`}
              >
                Login
              </button>
            </Link>
          ) : (
            <div
              className={`px-2 py-1 rounded-xl shadow max-w-[200px] relative  ${
                state.Theme.Theme === "light"
                  ? "bg-gray-600 border-2"
                  : "bg-stone-700 border border-stone-600"
              }`}
            >
              <p className="font-bold line-clamp-1 text-white">
                Govindanath Dasa
              </p>
              <p className="text-gray-300 font-extrabold text-xs">CCT</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default CCTHeader;

function MenuIconAndDropDown({ isSelectionOpen, toggleSelection }) {
  const { pathname } = useLocation();
  const { state } = useMyContext();
  const menuRef = useRef();

  // Attach click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleSelection(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSelection]);
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        className={`flex items-center justify-between border px-4 py-2 rounded-xl ${
          state.Theme.Theme === "light"
            ? "border-gray-200"
            : "border-stone-800 bg-stone-900"
        }`}
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => toggleSelection(!isSelectionOpen)}
      >
        Menu
        <MdOutlineKeyboardArrowDown size={16} />
      </button>
      {isSelectionOpen && (
        <nav
          className={`origin-top-left absolute left-0 mt-2 w-[320px] md:w-[50vw] rounded-2xl shadow-lg ${
            state.Theme.Theme === "light"
              ? "bg-white"
              : "bg-stone-900 border border-stone-800"
          } ring-1 ring-black ring-opacity-5 focus:outline-none py-5 px-5`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="flex flex-col gap-3 " role="none">
            <Link to={"/cct/analytics"}>
              <li
                className={`px-4 py-2 rounded-lg text-lg transition-colors duration-500 ${
                  state.Theme.Theme === "light"
                    ? pathname === "/cct/analytics"
                      ? "text-purple-700 bg-purple-200 border border-purple-300"
                      : "bg-gray-50 border"
                    : pathname === "/cct/analytics"
                    ? "bg-purple-900 text-white border border-purple-700"
                    : "bg-stone-800 border border-stone-700"
                }`}
                onClick={() => toggleSelection(false)}
              >
                Analytics
              </li>
            </Link>
            <Link to={"/cct/counselers"}>
              <li
                className={`px-4 py-2 rounded-lg text-lg transition-colors duration-500 ${
                  state.Theme.Theme === "light"
                    ? pathname === "/cct/counselers"
                      ? "text-purple-700 bg-purple-200 border border-purple-300"
                      : "bg-gray-50 border"
                    : pathname === "/cct/counselers"
                    ? "bg-purple-900 text-white border border-purple-700"
                    : "bg-stone-800 border border-stone-700"
                }`}
                onClick={() => toggleSelection(false)}
              >
                Counselers
              </li>
            </Link>
            <Link to={"/cct/sessions"}>
              <li
                className={`px-4 py-2 rounded-lg text-lg transition-colors duration-500 ${
                  state.Theme.Theme === "light"
                    ? pathname === "/cct/sessions"
                      ? "text-purple-700 bg-purple-200 border border-purple-300"
                      : "bg-gray-50 border"
                    : pathname === "/cct/sessions"
                    ? "bg-purple-900 text-white border border-purple-700"
                    : "bg-stone-800 border border-stone-700"
                }`}
                onClick={() => toggleSelection(false)}
              >
                Sessions
              </li>
            </Link>
            <Link to={"/cct/seva"}>
              <li
                className={`px-4 py-2 rounded-lg text-lg transition-colors duration-500 ${
                  state.Theme.Theme === "light"
                    ? pathname === "/cct/seva"
                      ? "text-purple-700 bg-purple-200 border border-purple-300"
                      : "bg-gray-50 border"
                    : pathname === "/cct/seva"
                    ? "bg-purple-900 text-white border border-purple-700"
                    : "bg-stone-800 border border-stone-700"
                }`}
                onClick={() => toggleSelection(false)}
              >
                Activities
              </li>
            </Link>
            <Link to={"/cct/attendance"}>
              <li
                className={`px-4 py-2 rounded-lg text-lg transition-colors duration-500 ${
                  state.Theme.Theme === "light"
                    ? pathname === "/cct/attendance"
                      ? "text-purple-700 bg-purple-200 border border-purple-300"
                      : "bg-gray-50 border"
                    : pathname === "/cct/attendance"
                    ? "bg-purple-900 text-white border border-purple-700"
                    : "bg-stone-800 border border-stone-700"
                }`}
                onClick={() => toggleSelection(false)}
              >
                CBM Attendance
              </li>
            </Link>
            <Link to={"/cct/scan"}>
              <li
                className={`px-4 py-2 rounded-lg text-lg transition-colors duration-500 ${
                  state.Theme.Theme === "light"
                    ? pathname === "/cct/scan"
                      ? "text-purple-700 bg-purple-200 border border-purple-300"
                      : "bg-gray-50 border"
                    : pathname === "/cct/scan"
                    ? "bg-purple-900 text-white border border-purple-700"
                    : "bg-stone-800 border border-stone-700"
                }`}
                onClick={() => toggleSelection(false)}
              >
                Sanner
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
}
