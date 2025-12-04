import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}
function Backdrop({ children, onClick }: Props) {
  return (
    <>
      <motion.div
        className="fixed z-150 top-0 w-full left-0 h-screen w-screen bg-black flex items-center justify-center"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
      ></motion.div>

      <div className="z-160 fixed w-[90%] left-[5%] sm:w-1/2 sm:left-1/4">
        {children}
      </div>
    </>
  );
}

export default Backdrop;
