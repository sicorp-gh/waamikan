interface Props {
  items: string[];
  className?: string;
  isOpen?: boolean;
}

function Menu({ items, className, isOpen }: Props) {
  return (
    <ul
      className={`menu menu-vertical lg:menu-horizontal ${className}`}
      style={{
        left: isOpen ? "0%" : "-100%",
        transition: "left 1s ease-in-out",
      }}
    >
      {items.map((item, index) => (
        <li key={index}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
