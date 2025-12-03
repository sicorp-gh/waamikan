import Container from "../layouts/Container";
import Button from "./Button";
import BannerImage from "../assets/ad.jpg";

function Banner() {
  return (
    <Container
      bgImage={BannerImage}
      className="min-h-[30vh] flex items-center bg-blue-600"
    >
      <Button className="btn btn-primary">Shop Now</Button>
    </Container>
  );
}

export default Banner;
