import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
}

const colsMap = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
};

function GridRow({ cols = 1, children, className, gap = 0 }: Props) {
  return (
    <div className={clsx("sm:grid", colsMap[cols], `gap-${gap}`, className)}>
      {children}
    </div>
  );
}

export default GridRow;
