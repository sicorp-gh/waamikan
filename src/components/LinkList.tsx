import type { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  size?: "large" | "normal" | "small";
  color?: string;
  piped?: boolean;
  display?: string;
}

function LinkList({
  items,
  size = "normal",
  color = "primary",
  piped = false,
  display = "d-flex",
}: Props) {
  let sizeClass = "";

  switch (size) {
    case "small":
      sizeClass = "small-text";
      break;
    case "large":
      sizeClass = "fs-3";
      break;
    default:
      sizeClass = "fs-6";
  }

  return (
    <ul className={`${display} list-unstyled m-0 gap-3 ${sizeClass}`}>
      {items.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className={`text-decoration-none text-${color} ${
              piped && index > 0 ? "px-3 border-start" : ""
            }`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
