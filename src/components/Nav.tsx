import { useState } from "react";
import Menu from "./Menu";
import NavBtn from "./NavBtn";

interface Props {
  className?: string;
}

function Nav({ className }: Props) {
  const [isMenuOpen, setMenuState] = useState(false);

  const handleClick = () => {
    setMenuState(!isMenuOpen);
    console.log(isMenuOpen);
  };

  let MenuItems = [
    "HOME",
    "PRODUCTS",
    "BRANDS",
    "SRVICES",
    "ACCOUNT",
    "CONTACT",
  ];
  return (
    <div className={className}>
      <Menu
        isOpen={isMenuOpen}
        items={MenuItems}
        className="-left-full sm:left-0 fixed top-0 sm:static sm:left-auto h-screen sm:h-auto w-[60%] sm:w-auto space-x-2 text-sm font-semibold text-white sm:text-gray-600  bg-gray-700 sm:bg-transparent"
      />
      <NavBtn
        className="fixed sm:relative top-5 right-2"
        onBtnClick={handleClick}
      />
    </div>
  );
}

export default Nav;
