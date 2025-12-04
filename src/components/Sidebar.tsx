import { CiSearch } from "react-icons/ci";
import SectionContainer from "./SectionContainer";
import TextBox from "./TextBox";
import LinkGroup from "../components/LinkGroup";

function Sidebar() {
  let categories = [
    "Surgical Instruments",
    "Diagnostic Equipment",
    "Personal Protective Equipment (PPE)",
    "Wound Care & Dressings",
    "Respiratory Supplies",
    "IV & Infusion Supplies",
    "Hospital Furniture",
    "Laboratory Equipment",
    "Pharmaceuticals",
    "Rehabilitation & Mobility Aids",
    "Emergency & First Aid",
    "Sterilization & Disinfection",
    "Monitoring Devices",
    "Dental Supplies",
    "Maternity & Neonatal Supplies",
  ];

  return (
    <div className="w-full space-y-5 text-sm">
      <SectionContainer title="Search Products" className="hidden sm:block">
        <TextBox type="search">
          <CiSearch />
        </TextBox>
      </SectionContainer>
      <LinkGroup
        className="hidden sm:block"
        title="FILTER BY PROCUCT CATEGORY"
        items={categories}
      />
    </div>
  );
}

export default Sidebar;
