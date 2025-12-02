import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function SidebarGroup({ title, children }: Props) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      {/* Title section */}
      <div className="p-2 primary-bg">{title}</div>

      {/* Content section */}
      <div className="px-2 py-3 .light-gray-bg">{children}</div>
    </div>
  );
}

export default SidebarGroup;
