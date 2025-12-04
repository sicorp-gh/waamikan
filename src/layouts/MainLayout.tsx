import Callout from "../components/Callout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import NavbarLayout from "./NavbarLayout";
import Banner from "../components/Banner";
import MainContentLayout from "./MainContentLayout";
import { motion } from "framer-motion";

function MainLayout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Callout />
        <HeaderLayout />
        <NavbarLayout />
        <Banner />
        <MainContentLayout />
        <FooterLayout />
      </motion.div>
    </>
  );
}

export default MainLayout;
