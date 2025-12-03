interface Props {
  className?: string;
  items: string[];
}

function BreadCrumb({ className, items }: Props) {
  return (
    <div className={`breadcrumbs text-sm ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreadCrumb;
