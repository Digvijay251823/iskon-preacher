import React, { useEffect, useState } from "react";

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useMyContext } from "../store/context";
import { HiMiniQrCode, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { TbClockCheck } from "react-icons/tb";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PiClockClockwiseDuotone } from "react-icons/pi";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { RiLinksLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Scanner() {
  const { state } = useMyContext();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-5">
        <div
          className={`border w-full rounded-xl flex flex-col ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-700"
          } flex items-center gap-2 text-xl`}
        >
          <div
            className={` border-b w-full py-1.5 px-5 rounded-t-xl ${
              state.Theme.Theme === "light"
                ? "bg-gray-200 border-b-gray-300"
                : "bg-stone-800 border-b-stone-700"
            } flex items-center gap-2 text-xl`}
          >
            <TbClockCheck />
            Attendance
          </div>
          <div className="flex items-center justify-evenly w-full text-blue-700 py-4">
            <Link to="/attendance/1">
              <p className="flex items-center underline">
                <RiLinksLine />
                Link
              </p>
            </Link>
            <CopyUrlComponent />
            <p className="text-2xl">
              <HiMiniQrCode />
            </p>
          </div>
        </div>
        <div
          className={`border w-full rounded-xl flex flex-col ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-700"
          } flex items-center gap-2 text-xl`}
        >
          <div
            className={` border-b w-full py-1.5 px-5 rounded-t-xl ${
              state.Theme.Theme === "light"
                ? "bg-gray-200 border-b-gray-300"
                : "bg-stone-800 border-b-stone-700"
            } flex items-center gap-2 text-xl`}
          >
            <PiClockClockwiseDuotone />
            Future Sessions (RSVP)
          </div>
          <div className="flex items-center justify-evenly w-full text-blue-700 py-4">
            <Link to="/rsvp/1">
              <p className="flex items-center underline">
                <RiLinksLine />
                Link
              </p>
            </Link>
            <CopyUrlComponent />
            <p className="text-2xl">
              <HiMiniQrCode />
            </p>
          </div>
        </div>
        <div
          className={`border w-full rounded-xl flex flex-col ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-700"
          } flex items-center gap-2 text-xl`}
        >
          <div
            className={` border-b w-full py-1.5 px-5 rounded-t-xl ${
              state.Theme.Theme === "light"
                ? "bg-gray-200 border-b-gray-300"
                : "bg-stone-800 border-b-stone-700"
            } flex items-center gap-2 text-xl`}
          >
            <MdOutlineWorkspacePremium />
            Activity
          </div>
          <div className="flex items-center justify-evenly w-full text-blue-700 py-4">
            <Link to="/activity/1">
              <p className="flex items-center underline">
                <RiLinksLine />
                Link
              </p>
            </Link>
            <CopyUrlComponent />
            <p className="text-2xl">
              <HiMiniQrCode />
            </p>
          </div>
        </div>
        <div
          className={`border w-full rounded-xl flex flex-col ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-700"
          } flex items-center gap-2 text-xl`}
        >
          <div
            className={` border-b w-full py-1.5 px-5 rounded-t-xl ${
              state.Theme.Theme === "light"
                ? "bg-gray-200 border-b-gray-300"
                : "bg-stone-800 border-b-stone-700"
            } flex items-center gap-2 text-xl`}
          >
            <LiaPrayingHandsSolid />
            Sadhana
          </div>
          <div className="flex items-center justify-evenly w-full text-blue-700 py-4">
            <Link to="/sadhana/1">
              <p className="flex items-center underline">
                <RiLinksLine />
                Link
              </p>
            </Link>
            <CopyUrlComponent />
            <p className="text-2xl">
              <HiMiniQrCode />
            </p>
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
