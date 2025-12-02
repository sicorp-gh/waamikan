import Image from "react-bootstrap/Image";

interface Props {
  size: string;
}

function Logo({ size }: Props) {
  return <Image src="../public/img/logo.png" className={size} />;
}

export default Logo;
