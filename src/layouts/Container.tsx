import type { ReactNode } from "react";

interface Props {
  bgImage?: string;
  children?: ReactNode;
  className?: string;
}

function Container({ bgImage, children, className = "" }: Props) {
  return (
    <div
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : undefined
      }
      className={`w-full sm:w-[70%] mx-auto sm:p-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
