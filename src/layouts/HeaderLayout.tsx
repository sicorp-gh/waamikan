import Logo from "@/components/Logo";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import Container from "../components/Container";

function HeaderLayout() {
  let MenuItems = ["Welcome Guest", "Logout", "Account", "0.00"];
  return (
    <div className="w-full bg-gray-100 p-2 sticky top-0 sm:flex items-center">
      <Container className="grid grid-cols-4">
        <div className="col-span-1">
          <Logo />
        </div>
        <div className="col-span-3 text-end">
          <Menu
            items={MenuItems}
            className="divide-x-1 divide-gray-300 w-full hidden sm:flex justify-end"
          />
          <Nav />
        </div>
      </Container>
    </div>
  );
}

export default HeaderLayout;
