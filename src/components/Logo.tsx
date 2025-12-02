import logo from "../assets/logo.png";

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return <img className={`max-w-full ${className}`} src={logo} />;
}

export default Logo;
