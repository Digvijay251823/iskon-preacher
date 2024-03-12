import React, { useEffect, useState } from "react";

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useMyContext } from "../store/context";
import {
  HiClipboardDocumentList,
  HiMiniQrCode,
  HiOutlineClipboardDocumentList,
  HiQrCode,
} from "react-icons/hi2";
import { AiOutlineLink } from "react-icons/ai";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { TbClockCheck } from "react-icons/tb";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PiClockClockwiseDuotone } from "react-icons/pi";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { RiLinksLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import Modal from "../App/components/Modal";

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
          <div className="flex items-center justify-evenly w-full py-4">
            <AttendanceLink url={"http://google.com"} />
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
          <div className="flex items-center justify-evenly w-full py-4">
            <AttendanceLink url={"http://google.com"} />
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
          <div className="flex items-center justify-evenly w-full py-4">
            <AttendanceLink url={"http://google.com"} />
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
          <div className="flex items-center justify-evenly w-full py-4">
            <AttendanceLink url={"http://google.com"} />
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

function AttendanceLink({ url }) {
  const [isOpen, setIsOpen] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const { state } = useMyContext();
  useEffect(() => {
    setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 3000);
  }, [isCopied]);

  return (
    <>
      <div className="flex items-center gap-10 px-4">
        <Link to={url}>
          <button className="flex items-center gap-1 text-blue-700 underline">
            <AiOutlineLink />
            Link
          </button>
        </Link>
        <CopyToClipboard
          text={`${window.location.host}/${url}`}
          onCopy={() => setIsCopied(true)}
        >
          {isCopied ? (
            <div className="cursor-pointer">
              <HiClipboardDocumentCheck className="text-green-500 text-2xl" />
            </div>
          ) : (
            <div className="cursor-pointer">
              <HiClipboardDocumentList className="text-2xl text-gray-400" />
            </div>
          )}
        </CopyToClipboard>
        <button
          className="text-blue-700 text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <HiQrCode values={`${window.location.host}/${url}`} />
        </button>
      </div>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div
          className={`border p-5 rounded-3xl shadow ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-100 "
              : "bg-stone-950 border-stone-900"
          }`}
        >
          <div className="bg-white p-1 rounded-lg">
            <QRCode value={`${window.location.host}/${url}`} />
          </div>
          <div className="flex items-center gap-5 w-full mt-5">
            <button
              className={`w-full border px-4 py-1.5 rounded-xl shadow ${
                state.Theme.Theme === "light"
                  ? "border-gray-200 bg-gray-100 hover:bg-white"
                  : "border-stone-800 hover:bg-stone-800 bg-stone-900"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className={`w-full border px-4 py-1.5 rounded-xl shadow ${
                state.Theme.Theme === "light"
                  ? "bg-blue-600 border-blue-700 text-white hover:bg-blue-500"
                  : "bg-blue-900 border-blue-700 hover:bg-blue-800"
              }`}
            >
              Download
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
