import Container from "../layouts/Container";
import Button from "./Button";
import BannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <Container
      bgImage={BannerImage}
      className="min-h-[40vh] rounded-0 shadow-0 sm:rounded sm:shadow-md flex items-center justify-center bg-blue-200"
    >
      <Button className="btn btn-secondary top-21 relative">Shop Now</Button>
    </Container>
  );
}

export default Banner;
