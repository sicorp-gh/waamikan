import type { ReactNode } from "react";

interface Props {
  cols?: string;
  children: ReactNode;
  className?: string;
  gap?: string;
}
function GridRow({ cols = "1", children, className, gap = "0" }: Props) {
  return (
    <div className={`grid sm:grid-cols-${cols} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

export default GridRow;
