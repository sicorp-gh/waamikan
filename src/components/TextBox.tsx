import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  type?: string;
}

export default function Search({ children, onClick, type = "text" }: Props) {
  return (
    <label
      className="input border-2 border-gray-300 bg-white w-full"
      onClick={onClick}
    >
      <span className="h-[1em] opacity-50">{children}</span>

      <input type={type} className="grow" placeholder="Search" />
    </label>
  );
}
