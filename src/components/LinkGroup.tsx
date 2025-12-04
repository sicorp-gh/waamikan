import { FaAngleRight } from "react-icons/fa6";

interface Props {
  className?: string;
  items: string[];
  title: string;
}

function LinkGroup({ className, items, title }: Props) {
  return (
    <div className={className}>
      <h1 className="bg-gray-200 p-2 hidden sm:block rounded-tl font-semibold rounded-tr">
        {title}
      </h1>
      <ul className="menu rounded-bl rounded-br p-0 menu-vertical w-full divide-y-1 divide-gray-200 bg-gray-50">
        {items.map((item, index) => (
          <li key={index} className="p-0">
            <a className="w-full flex items-center justify-between hover:font-semibold transition duration-300 ease-in-out hover:text-md hover:scale-[1.1]">
              {item} <FaAngleRight className="text-gray-800" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkGroup;
