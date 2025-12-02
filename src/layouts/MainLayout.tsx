import Header from "../components/Header";
import MainContent from "../components/MainContent";
import NavLayout from "./NavLayout";

function MainLayout() {
  return (
    <div className="container-fluid px-0">
      <Header />
      <NavLayout />
      <MainContent />
    </div>
  );
}

export default MainLayout;
