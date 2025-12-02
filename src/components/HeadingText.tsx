import type { ReactNode } from "react";

interface Props {
  color?: string;
  size?: string;
  className?: string;
  align?: string;
  children?: ReactNode;
}
function HeadingText({
  color = "gray-600",
  size = "2xl",
  className = "",
  align = "left",
  children,
}: Props) {
  return (
    <h1
      className={`font-bold ${className} text-${color} text-${size} text-${align}`}
    >
      {children}
    </h1>
  );
}

export default HeadingText;
