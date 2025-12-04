import type { ReactNode } from "react";

interface Props {
  type?: string;
  children?: ReactNode;
}

export default function Search({ children, type = "text" }: Props) {
  return (
    <label className="input border-2 border-gray-300 bg-white w-full">
      <span className="h-[1em] opacity-50">{children}</span>

      <input type={type} className="grow" placeholder="Search" />
    </label>
  );
}
