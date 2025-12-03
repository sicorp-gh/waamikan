interface Props {
  items: string[];
  className?: string;
  isOpen?: boolean;
}

function NavMenu({ items, className, isOpen }: Props) {
  return (
    <ul
      className={`menu z-100 space-y-7 sm:space-y-0 p-5 sm:p-0 menu-vertical lg:menu-horizontal -left-full sm:left-0 fixed top-0 sm:static sm:left-auto h-screen sm:h-auto w-[60%] sm:w-auto space-x-2 text-sm font-semibold text-white sm:text-gray-600  bg-gray-700 sm:bg-transparent ${className}`}
      style={{
        left: isOpen ? "0%" : "-100%",
        transition: "left 1s ease-in-out",
      }}
    >
      {items.map((item, index) => (
        <li key={index}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
