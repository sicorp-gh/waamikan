import Logo from "../components/Logo";
import AccountOptions from "../components/AccountOptions";
import NavLinks from "../components/NavLinks";

function NavLayout() {
  return (
    <div className="container-fluid w-100 px-0 py-3 light-bg">
      <div className="row container w-100 w-md-75 mx-auto">
        <div className="text-center text-md-start col-md-6">
          <Logo size="w-50" />
        </div>
        <div className="col-md-6">
          <AccountOptions />
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default NavLayout;
