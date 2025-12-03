import type { ReactNode } from "react";

interface Props {
  color?: string;
  className?: string;
  children?: ReactNode;
  size?: string;
}
function Button({
  color = "neutral",
  children = "Button",
  className,
  size = "",
}: Props) {
  return (
    <button className={`btn btn-${color} btn-${size} ${className}`}>
      {children}
    </button>
  );
}
export default Button;
