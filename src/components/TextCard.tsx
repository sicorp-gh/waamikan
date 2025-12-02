import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function TextCard({ children }: Props) {
  return (
    <div className="primary-bg p-1">
      <div className="p-3 border text-card border-white rounded">
        {children}
      </div>
    </div>
  );
}

export default TextCard;
