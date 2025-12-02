import LinkList from "./LinkList";

function NavLinks() {
  let links = ["HOME", "SHOP", "CATEGORIES", "SHIPPING", "ABOUT", "CONTACT"];

  return (
    <div className="d-flex justify-content-end py-3 fw-bold">
      <LinkList items={links} color="dark" size="small" />
    </div>
  );
}

export default NavLinks;
