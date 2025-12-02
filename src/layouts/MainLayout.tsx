import Callout from "../components/Callout";
import HeaderLayout from "./HeaderLayout";
import MainContentLayout from "./MainContentLayout";

function MainLayout() {
  return (
    <div className="w-full">
      <div>
        <Callout />
        <HeaderLayout />
        <MainContentLayout />
      </div>
    </div>
  );
}

export default MainLayout;
