import Logo from "@/components/Logo";
import Menu from "../components/NavMenu";
import Container from "./Container";

function HeaderLayout() {
  let MenuItems = ["Welcome Guest", "Logout", "Account", "0.00"];
  return (
    <div className="w-full bg-blue-400 sm:bg-gray-100 p-2 sm:flex items-center sticky top-0 sm:relative">
      <Container className="grid grid-cols-4">
        <div className="col-span-1">
          <Logo />
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <Menu
            items={MenuItems}
            className="divide-x-1 divide-gray-300 w-full hidden sm:flex justify-end"
          />
        </div>
      </Container>
    </div>
  );
}

export default HeaderLayout;
