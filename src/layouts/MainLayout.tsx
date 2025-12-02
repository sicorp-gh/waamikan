import Callout from "../components/Callout";
import MainContent from "../components/MainContent";
import NavLayout from "./NavLayout";

function MainLayout() {
  return (
    <div className="container-fluid px-0">
      <Callout />
      <NavLayout />
      <MainContent />
    </div>
  );
}

export default MainLayout;
