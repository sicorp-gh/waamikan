import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  color?: string;
  className?: string;
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | string;
}

function Button({
  color = "neutral",
  className,
  children = "Button",
  size = "sm",
}: Props) {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`btn btn-${size} btn-${color}  ${className}`}
      >
        {children}
      </motion.button>
    </>
  );
}
export default Button;
