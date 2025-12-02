import { useState } from "react";
import Menu from "./Menu";
import NavBtn from "./NavBtn";

function Nav() {
  const [isMenuOpen, setMenuState] = useState(false);

  const handleClick = () => {
    setMenuState(!isMenuOpen);
    console.log(isMenuOpen);
  };

  let MenuItems = [
    "HOME",
    "SHOP",
    "CATEGORIES",
    "SHIPPING",
    "ABOUT",
    "CONTACT",
  ];
  return (
    <div>
      <Menu
        isOpen={isMenuOpen}
        items={MenuItems}
        className="-left-full sm:left-0 absolute top-0 sm:relative sm:left-auto h-screen sm:h-auto w-[60%] sm:w-auto space-x-2 text-sm font-semibold text-white sm:text-gray-600  bg-gray-700 sm:bg-transparent"
      />
      <NavBtn onBtnClick={handleClick} />
    </div>
  );
}

export default Nav;
