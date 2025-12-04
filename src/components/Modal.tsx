// import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  handleClose?: () => void;
  children?: ReactNode;
  title: string;
}

const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      mass: 1,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.25 },
  },
};

function Modal({
  handleClose,
  children = "Hello World!",
  title = "Modal",
}: Props) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-[98%] sm:w-full mx-auto rounded-lg shadow-mg overflow-hidden bg-white"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white w-full">
          <div className="relative p-4 flex items-center justify-between w-full">
            <span className="font-semibold">{title}</span>
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
