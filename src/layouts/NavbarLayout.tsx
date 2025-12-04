import Nav from "../components/Nav";
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function NavbarLayout() {
  return (
    <Container className="sm:my-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <Nav className="flex justify-end sm:justify-start" />
        </div>

        <div className="col-span-1 hidden sm:flex items-center justify-end space-x-3">
          <IoSearch className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </Container>
  );
}

export default NavbarLayout;
