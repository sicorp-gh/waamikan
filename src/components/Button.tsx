import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  color?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  size?: "xs" | "sm" | "md" | "lg" | string;
}

function Button({
  color = "neutral",
  className,
  children = "Button",
  onClick,
  size = "sm",
}: Props) {
  return (
    <>
      <motion.button
        className={`btn btn-${size} btn-${color}  ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </>
  );
}
export default Button;
