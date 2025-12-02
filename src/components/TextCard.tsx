import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

function TextCard({ children, className }: Props) {
  return (
    <div
      className={`bg-red-500 p-1 transition hover:scale-[1.05] ${className}`}
    >
      <div className="w-full rounded p-3 border-1 border-white">{children}</div>
    </div>
  );
}

export default TextCard;
