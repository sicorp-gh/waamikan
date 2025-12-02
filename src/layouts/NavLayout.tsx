import Logo from "../components/Logo";
import AccountOptions from "../components/AccountOptions";
import NavLinks from "../components/NavLinks";

function NavLayout() {
  return (
    <div className="container-fluid px-0 py-3 nav-container">
      <div className="row w-75 mx-auto">
        <div className="col-md-6">
          <Logo />
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
