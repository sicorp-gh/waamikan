import type { ReactNode } from "react";

interface Props {
  color?: string;
  align?: "start" | "center" | "end";
  children?: ReactNode;
}

function Paragraph({
  color = "primary",
  align = "start",
  children = null,
}: Props) {
  return <p className={`text-${align} text-${color}`}>{children}</p>;
}

export default Paragraph;
