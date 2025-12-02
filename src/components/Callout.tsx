import AppName from "./AppName";
import Container from "../components/Container";
import ContactPhone from "./ContactPhone";
import ContactEmail from "./ContactEmail";

function Callout() {
  return (
    <div className="w-full hidden sm:flex items-center p-2 bg-red-500">
      <Container className="text-white text-sm font-bold">
        <div className="flex items-center justify-between">
          <div className="space-x-3 flex items-center">
            <ContactPhone />
            <ContactEmail />
          </div>

          <div>
            <AppName />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Callout;
