import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (isOpen) {
    return (
      <>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-[1000] backdrop-brightness-50 cursor-pointer flex items-center justify-center"
          onClick={onClose}
        ></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000]">
          {children}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Modal;
