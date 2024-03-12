import React, { useEffect, useState } from "react";
import Modal from "../../App/components/Modal";
import { useMyContext } from "../../store/context";
import QRCode from "react-qr-code";
import {
  HiClipboard,
  HiClipboardDocument,
  HiClipboardDocumentCheck,
  HiClipboardDocumentList,
  HiQrCode,
} from "react-icons/hi2";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

function AttendanceLink({ sessionId }) {
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
      <div className="flex items-center gap-5 px-4">
        <Link to={`/attendance/cbm/${sessionId}`}>
          <button className="flex items-center gap-1 text-blue-700 underline">
            <AiOutlineLink />
            Link
          </button>
        </Link>
        <CopyToClipboard
          text={`${window.location.host}/attendance/cbm/${sessionId}`}
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
          <HiQrCode
            values={`${window.location.host}/attendance/cbm/${sessionId}`}
          />
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
            <QRCode value={`${window.location.host}/attendance/${sessionId}`} />
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

export default AttendanceLink;
