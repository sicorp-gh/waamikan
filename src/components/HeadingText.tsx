import type { ReactNode } from "react";

interface Props {
  text: string;
  color?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  align?: "start" | "center" | "end";
  children?: ReactNode;
}

function HeadingText({
  text,
  color = "primary",
  size = "6",
  align = "center",
  children = null,
}: Props) {
  return (
    <p className={`fw-bold fs-${size} text-${align} text-${color}`}>
      {text} {children}
    </p>
  );
}

export default HeadingText;
