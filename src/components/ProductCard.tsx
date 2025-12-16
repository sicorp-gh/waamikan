import Button from "./Button";
import React, { useState } from "react";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

interface Props {
  className?: string;
  image: string;
  title: string;
  price: number;
  onAddToCart?: (quantity: number) => void;
  onViewDetails?: () => void;
}

const ProductCard: React.FC<Props> = ({
  className,
  image,
  title,
  price,
  onAddToCart,
  onViewDetails,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div
      className={`${className} bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full max-w-sm`}
    >
      {/* Image */}
      <div className="relative">
        <img src={image} alt={image} className="m-2 w-full object-cover" />
        {/* Add to Cart button on image */}

        <Button
          onClick={() => onAddToCart && onAddToCart(quantity)}
          className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition"
        >
          <FaShoppingCart />
        </Button>
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Price */}
        <div className="text-xl font-bold text-gray-800">
          ${price.toFixed(2)}
        </div>

        {/* Quantity selector */}
        <div className="flex items-center gap-2">
          <Button
            className="bg-gray-200 btn-xs text-[1.04rem] text-gray-700 rounded hover:bg-gray-300 transition"
            onClick={decrement}
          >
            -
          </Button>
          <span className="px-2">{quantity}</span>

          <Button
            className="bg-gray-200 btn-xs text-[1.04rem] text-gray-700 rounded hover:bg-gray-300 transition"
            onClick={increment}
          >
            +
          </Button>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-2">
          <Button
            className="flex-1 bg-blue-500  text-xs hover:bg-blue-600 text-white rounded transition"
            onClick={() => onAddToCart && onAddToCart(quantity)}
            size="lg"
          >
            Add to Cart
          </Button>
          <Button
            className="flex-1 bg-gray-200 text-sm hover:bg-gray-300 text-gray-800 py-2 rounded transition flex items-center justify-center gap-1"
            onClick={onViewDetails}
            size="lg"
          >
            <FaInfoCircle /> Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
