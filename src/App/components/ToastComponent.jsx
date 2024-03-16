import React, { useCallback, useEffect, useState } from "react";
import { useMyContext } from "../../store/context";
import { GoCheckCircleFill } from "react-icons/go";
import { HiXMark } from "react-icons/hi2";
import { TbCircleXFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

function ToastComponent() {
  const { state, dispatch } = useMyContext();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (state.Toast.toast.isVisible) {
      setIsVisible(true);
    }
  }, [state.Toast.toast.isVisible]);

  useEffect(() => {
    if (state.Toast.toast.isVisible) {
      setTimeout(() => {
        dispatch({ type: "HIDE_TOAST" });
        setIsVisible(false);
      }, 4000);
    }
  }, [state.Toast.toast.isVisible, dispatch]);

  if (isVisible) {
    return (
      <div className="fixed z-[10000] top-5 right-5">
        <div
          className={`shadow-xl backdrop-blur-3xl text-lg rounded-3xl ${
            state.Theme.Theme === "light"
              ? "text-black border border-stone-300"
              : "text-white border border-gray-800"
          }`}
        >
          {state.Toast.toast.type === "LOADING" ? (
            <div className="flex items-center gap-2 px-3 py-4 bg-blue-700 bg-opacity-30 rounded-3xl">
              <FaCircle />
              {state.Toast.toast.message}
            </div>
          ) : state.Toast.toast.type === "SUCCESS" ? (
            <div className="flex items-center gap-2 px-3 py-4 bg-green-600 bg-opacity-30 rounded-3xl">
              <div className="flex items-center gap-2">
                <GoCheckCircleFill className="text-3xl text-green-600" />
                {state.Toast.toast.message}
              </div>
            </div>
          ) : (
            <div
              className={`flex items-center gap-2 px-3 py-4 bg-red-600 bg-opacity-30 rounded-3xl`}
            >
              <TbCircleXFilled className="text-3xl text-red-600" />
              {state.Toast.toast.message}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ToastComponent;
