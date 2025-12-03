import Search from "../components/Search";
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
      <Search />
      <LinkGroup
        className="hidden sm:block"
        title="FILTER BY PROCUCT CATEGORY"
        items={categories}
      />
    </div>
  );
}

export default Sidebar;
