import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export const MainLayout = () => {
  return (
    <div className="container-fluid px-0">
      <Header />
      <MainContent />
    </div>
  );
};

export default MainLayout;
