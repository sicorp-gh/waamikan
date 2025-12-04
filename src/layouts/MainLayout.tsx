import React from "react";
import Callout from "../components/Callout";
import HeaderLayout from "./HeaderLayout";
import NavbarLayout from "./NavbarLayout";
import Banner from "../components/Banner";
import MainContentLayout from "./MainContentLayout";
import MobileMenu from "../components/MobileMenu";
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
        <MobileMenu />
      </motion.div>
    </>
  );
}

export default MainLayout;
