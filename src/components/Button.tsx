import type { ReactNode } from "react";

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
    <button className={`btn btn-${size} btn-${color}  ${className}`}>
      {children}
    </button>
  );
}
export default Button;
