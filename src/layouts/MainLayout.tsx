import Callout from "../components/Callout";
import HeaderLayout from "./HeaderLayout";
import MainContentLayout from "./MainContentLayout";
import Nav from "../components/Nav";
import Container from "./Container";
import GridRow from "./GridRow";
import GridCol from "./GridCol";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Ad from "../assets/ad.jpg";
import Button from "../components/Button";

function MainLayout() {
  return (
    <div className="w-full">
      <div>
        <Callout />
        <HeaderLayout />
        <Container>
          <GridRow cols={3} gap={5} className="my-5">
            <GridCol size={2}>
              <Nav className="flex justify-end sm:justify-start" />
            </GridCol>
            <GridCol
              size={1}
              className="w-full hidden sm:flex space-x-3 items-center justify-end"
            >
              <IoSearch />
              <FaShoppingCart />
            </GridCol>
          </GridRow>
        </Container>

        <Container className="relative">
          <img src={Ad} />
          <Button className="absolute top-10 left-5">Shop Now</Button>
        </Container>

        <MainContentLayout />
      </div>
    </div>
  );
}

export default MainLayout;
