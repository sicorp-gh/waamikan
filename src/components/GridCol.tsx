import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size?: string;
}
function GridCol({ children, className, size = "1" }: Props) {
  return <div className={`col-span-${size} ${className}`}>{children}</div>;
}

export default GridCol;
