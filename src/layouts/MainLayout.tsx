import Callout from "../components/Callout";
import HeaderLayout from "./HeaderLayout";
import MainContentLayout from "./MainContentLayout";
import Nav from "../components/Nav";
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import BannerImage from "../assets/ad.jpg";
import Button from "../components/Button";
function MainLayout() {
  return (
    <div className="w-full">
      <div>
        <Callout />
        <HeaderLayout />
        <Container>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <Nav className="flex justify-end sm:justify-start" />
            </div>

            <div className="col-span-1 flex items-center justify-end space-x-3">
              <IoSearch className="cursor-pointer" />
              <FaShoppingCart className="cursor-pointer" />
            </div>
          </div>
        </Container>

        <Container
          bgImage={BannerImage}
          className="min-h-[30vh] flex items-center p-3 bg-red-600"
        >
          <Button className="bg-red-400">Shop Now</Button>
        </Container>

        <MainContentLayout />
      </div>
    </div>
  );
}

export default MainLayout;
