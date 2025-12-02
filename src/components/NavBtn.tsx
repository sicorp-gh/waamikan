import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

interface Props {
  onBtnClick: () => void;
}

function NavBtn({ onBtnClick }: Props) {
  return (
    <>
      <label className="swap swap-rotate sm:hidden">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={() => onBtnClick()} />

        <RxHamburgerMenu className="swap-off size-7" />
        <IoClose className="swap-on size-7" />
      </label>
    </>
  );
}

export default NavBtn;
