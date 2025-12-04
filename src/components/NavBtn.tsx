import { RxHamburgerMenu } from "react-icons/rx";
// import { IoClose } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface Props {
  onBtnClick: () => void;
  className: string;
}

function NavBtn({ onBtnClick, className }: Props) {
  return (
    <>
      <label
        className={`z-50 swap swap-rotate text-white sm:text-gray-700 sm:hidden ${className}`}
      >
        <input type="checkbox" onChange={() => onBtnClick()} />
        <RxHamburgerMenu className="swap-off size-7" />

        <FaLongArrowAltLeft className="swap-on size-7" />
      </label>
    </>
  );
}

export default NavBtn;
