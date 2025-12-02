import SidebarGroup from "./SidebarGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Sidebar() {
  return (
    <>
      <SidebarGroup title="Search Product">
        <InputGroup>
          <Form.Control
            placeholder="Search Products"
            aria-label="Search Products"
            aria-describedby="basic-addon1"
          />

          {/* InputGroup.Text with no padding */}
          <InputGroup.Text id="basic-addon1" className="p-0 overflow-hidden">
            {/* Use variant="" (or 'light'/'link') and put classes in className */}
            <Button
              type="button"
              variant="" /* don't misuse variant prop */
              className="rounded-0 bg-white border-0 text-dark shadow-none p-2 btn-no-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </SidebarGroup>
    </>
  );
}

export default Sidebar;
