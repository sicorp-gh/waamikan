import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  title: string;
}

function Search({ children, className, title }: Props) {
  return (
    <div
      className={`${className} w-full rounded overflow-hidden bg-gray-50 border-2 border-gray-200`}
    >
      <h1 className="p-2 bg-gray-200 font-semibold">{title}</h1>
      <div className="px-3 py-5">{children}</div>
    </div>
  );
}

export default Search;
