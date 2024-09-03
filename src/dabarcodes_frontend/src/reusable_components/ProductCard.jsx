import React from "react";
import { useNavigate } from "react-router-dom";
import Ribbon from "./Ribbon";
import { useModal } from "../context/ModalContext";

const ProductCard = ({ product }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const { openLinkedSKU, closeLinkedSKU } = useModal();

  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/products/${product.name}`);

    closeLinkedSKU();
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();

    openLinkedSKU();
  };

  return (
    <div
      onClick={() => handleClick(product)}
      className="w-[244px] h-[423px cursor-pointer rounded-md bg-[#E7F8FE] relative"
    >
      {/* Conditionally render the ribbon if the product is expiring */}
      {product.isExpiring && (
        <Ribbon topOffset="0px" foldSize="12px">
          Expiring in 5 Days
        </Ribbon>
      )}
      <div className="flex flex-col gap-2 items-center justify-center">
        <img className="mt-12" src={product.img} alt={product.name} />
        <div className="m-4 flex flex-col gap-2">
          <p className="text-left text-xl font-bold">{product.name}</p>
          <p className="text-sm text-[#646464]">
            {truncateText(product.desc, 65)}
          </p>
          {/* Conditionally render the discount percentage if available */}
          {product.percentageOff && (
            <p className="bg-[#A5201F] mt-1 w-fit text-white px-4 py-1 rounded-lg">
              {product.percentageOff} off
            </p>
          )}
        </div>

        <div
          className={`bg-[#0D90C1]  mb-8 rounded-md flex justify-center w-[200px] text-white
            ${!product.percentageOff && "mt-11"}
            
            `}
        >
          <button onClick={handleButtonClick} className="px-4 py-2">
            Link SKU
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
