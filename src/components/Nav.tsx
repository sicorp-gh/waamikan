import { useState } from "react";
import NavMenu from "./NavMenu";
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

  let MenuItems = ["HOME", "PRODUCTS", "SRVICES", "ACCOUNT", "CONTACT"];
  return (
    <div className={className}>
      <NavMenu isOpen={isMenuOpen} items={MenuItems} />
      <NavBtn
        className="fixed sm:relative top-3 right-2"
        onBtnClick={handleClick}
      />
    </div>
  );
}

export default Nav;
