import React, { useEffect, useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { useMyContext } from "../store/context";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Scanner() {
  const { state } = useMyContext();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex md:flex-row flex-col gap-5">
        <div>
          <h1 className="my-2 px-4">Attendance</h1>
          <div
            className={`text-[100px] border p-5 rounded-xl ${
              state.Theme.Theme === "light"
                ? "text-gray-500 border-gray-300"
                : "text-stone-600 border-stone-800"
            }`}
          >
            <BsQrCodeScan />
          </div>
          <div className="flex items-center justify-between mt-3 px-2">
            <p
              className={`flex items-center gap-2 underline ${
                state.Theme.Theme === "light"
                  ? "text-blue-500"
                  : "text-blue-900"
              }`}
            >
              <FaLink />
              Link
            </p>

            <CopyUrlComponent />
          </div>
        </div>
        <div>
          <h1 className="my-2 px-4">RSVP</h1>
          <div
            className={`text-[100px] border p-5 rounded-xl ${
              state.Theme.Theme === "light"
                ? "text-gray-500 border-gray-300"
                : "text-stone-600 border-stone-800"
            }`}
          >
            <BsQrCodeScan />
          </div>
          <div className="flex items-center justify-between mt-3 px-2">
            <p
              className={`flex items-center gap-2 underline ${
                state.Theme.Theme === "light"
                  ? "text-blue-500"
                  : "text-blue-900"
              }`}
            >
              <FaLink />
              Link
            </p>
            <CopyUrlComponent />
          </div>
        </div>
        <div>
          <h1 className="my-2 px-4">Activities</h1>
          <div
            className={`text-[100px] border p-5 rounded-xl ${
              state.Theme.Theme === "light"
                ? "text-gray-500 border-gray-300"
                : "text-stone-600 border-stone-800"
            }`}
          >
            <BsQrCodeScan />
          </div>
          <div className="flex items-center justify-between mt-3 px-2">
            <p
              className={`flex items-center gap-2 underline ${
                state.Theme.Theme === "light"
                  ? "text-blue-500"
                  : "text-blue-900"
              }`}
            >
              <FaLink />
              Link
            </p>
            <CopyUrlComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scanner;

const CopyUrlComponent = () => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 5000);
  }, [isCopied]);
  return (
    <div>
      <CopyToClipboard onCopy={() => setIsCopied(true)}>
        {isCopied ? (
          <div className="text-green-600 text-2xl">
            <HiClipboardDocumentCheck />
          </div>
        ) : (
          <button className="text-gray-500 text-2xl ">
            <HiOutlineClipboardDocumentList />
          </button>
        )}
      </CopyToClipboard>
    </div>
  );
};
