import Callout from "../components/Callout";
import FooterLayout from "./FooterLayout";
import FadeContent from "../components/FadeContent";
import HeaderLayout from "./HeaderLayout";
import NavbarLayout from "./NavbarLayout";
import Banner from "../components/Banner";
import MainContentLayout from "./MainContentLayout";

function MainLayout() {
  return (
    <FadeContent>
      <Callout />
      <HeaderLayout />
      <NavbarLayout />
      <Banner />
      <MainContentLayout />
      <FooterLayout />
    </FadeContent>
  );
}

export default MainLayout;
