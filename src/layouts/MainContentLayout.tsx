import Container from "./Container";
import Sidebar from "../components/Sidebar";
import BreadCrumb from "../components/BreadCrumb";

function MainContentLayout() {
  let pageBreadCrumbItems = ["Home", "Products", ""];
  return (
    <Container className="sm:grid gap-5 my-5 grid-cols-5">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <BreadCrumb items={pageBreadCrumbItems} />
      </div>
    </Container>
  );
}

export default MainContentLayout;
