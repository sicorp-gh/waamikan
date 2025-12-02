import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}
function Container({ children, className }: Props) {
  return (
    <div className={`w-full sm:w-[70%] mx-auto p-2 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
