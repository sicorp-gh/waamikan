import Container from "./Container";
import Sidebar from "../components/Sidebar";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ProductImg from "../assets/products/01.jpg";

function MainContentLayout() {
  let pageBreadCrumbItems = ["Home", "Products", ""];
  return (
    <Container className="p-2 sm:p-0 sm:grid gap-5 my-5 grid-cols-5">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <BreadCrumb items={pageBreadCrumbItems} />
        <div className="grid gap-5 sm:grid-cols-2 my-10">
          <ProductCard
            className="col-span-1"
            image={ProductImg}
            title="Awesome Product"
            price={49.99}
            onAddToCart={(qty) => console.log("Add to cart:", qty)}
            onViewDetails={() => console.log("View details clicked")}
          />

          <ProductCard
            className="col-span-1"
            image={ProductImg}
            title="Awesome Product"
            price={49.99}
            onAddToCart={(qty) => console.log("Add to cart:", qty)}
            onViewDetails={() => console.log("View details clicked")}
          />

          <ProductCard
            className="col-span-1"
            image={ProductImg}
            title="Awesome Product"
            price={49.99}
            onAddToCart={(qty) => console.log("Add to cart:", qty)}
            onViewDetails={() => console.log("View details clicked")}
          />
        </div>
      </div>
    </Container>
  );
}

export default MainContentLayout;
