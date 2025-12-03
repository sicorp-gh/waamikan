import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6; // valid Tailwind col-span values
}

const sizeMap = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

function GridCol({ children, className, size = 1 }: Props) {
  return (
    <div className={clsx("my-3 sm:my-0", sizeMap[size], className)}>
      {children}
    </div>
  );
}

export default GridCol;
