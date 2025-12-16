import { useEffect, useState } from "react";
import axios from "axios";

import Container from "./Container";
import Sidebar from "../components/Sidebar";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_path: string | null;
}


function MainContentLayout() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("https://waamikan-api.onrender.com/product/")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const pageBreadCrumbItems = ["Home", "Products", ""];

  return (
    <Container className="p-2 sm:p-0 sm:grid gap-5 my-5 grid-cols-5">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <BreadCrumb items={pageBreadCrumbItems} />

        {loading ? (
          <p className="my-10 text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="my-10 text-gray-500">No products available</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 my-10">
            {products.map(product => (
              <ProductCard
                key={product.id}
                className="col-span-1"
                image={product.image_path ? `${product.image_path}` : "/placeholder.jpg"}
                title={product.name}
                price={product.price}
                onAddToCart={(qty) => console.log("Add to cart:", product.name, qty)}
                onViewDetails={() => console.log("View details clicked for:", product.name)}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default MainContentLayout;
