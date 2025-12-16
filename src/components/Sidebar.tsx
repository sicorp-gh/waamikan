import axios from "axios";
import { CiSearch } from "react-icons/ci";
import LinkGroup from "../components/LinkGroup";
import { useEffect, useState } from "react";
import SectionContainer from "./SectionContainer";
import TextBox from "./TextBox";

function Sidebar() {

  interface Category {
    id: number;
    name: string;
  }

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("https://waamikan-api.onrender.com/category/")
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full space-y-5 text-sm">
      <SectionContainer title="Search Products" className="hidden sm:block">
        <TextBox type="search">
          <CiSearch />
        </TextBox>
      </SectionContainer>

      {loading ? (
        <p className="hidden sm:block text-gray-500">Loading categories...</p>
      ) : categories.length === 0 ? (
        <p className="hidden sm:block text-gray-500">No categories available</p>
      ) : (
        <LinkGroup
          className="hidden sm:block"
          title="FILTER BY PRODUCT CATEGORY"
          items={categories.map(cat => cat.name)}
        />
      )}
    </div>
  );
}

export default Sidebar;
