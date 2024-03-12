import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [modalStyle, setModalStyle] = useState({
    transform: "scale(0.95)",
    opacity: 0,
  });

  useEffect(() => {
    if (isOpen) {
      // Open modal animation
      setTimeout(() => {
        setModalStyle({
          transform: "scale(1)",
          opacity: 1,
        });
      }, 50); // Delay the transition slightly for better visual effect
    } else {
      // Close modal animation
      setModalStyle({
        transform: "scale(0.95)",
        opacity: 0,
      });
      setTimeout(() => {
        setIsClosing(false);
      }, 3000); // Adjust this duration according to your transition duration
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsClosing(true);
    onClose();
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-lg transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModal}
    >
      <div
        style={{
          ...modalStyle,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
