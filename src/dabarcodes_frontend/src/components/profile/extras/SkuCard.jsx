import { CiBookmark } from "react-icons/ci";
import { AiOutlineQrcode } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import { useState } from "react";
import MenuBar from "./MenuBar";
import { useModal } from "../../../context/ModalContext";
import SingleQRModal from "../../customer/modal/SingleQRModal";
import MultiQRModal from "../../customer/modal/MultiQRModal";

const insertLineBreaks = (text, interval = 29) => {
  const parts = [];
  for (let i = 0; i < text.length; i += interval) {
    parts.push(text.substring(i, i + interval));
  }
  return parts.join("<br />");
};

const SkuCard = ({ Data }) => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]); // For multiple selections
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleSku, setSingleSku] = useState(null); // For individual SKU action

  const { openQR, isSingleQR, isMultiQR, openMultiQR } = useModal();

  const handleCheckboxChange = (productId) => {
    setSelectedCards((prevSelected) => {
      const updatedSelected = prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId];

      console.log("multiple SKU for QR Code:", updatedSelected);

      return updatedSelected;
    });
  };

  const redirectToSkuDetails = () => {
    navigate("/sku-details");
  };

  const handleOptionSelect = (option) => {
    if (option === "viewDetails" && singleSku) {
      openQR();
      console.log("Single SKU ID for View Details:", singleSku);
    }
    setIsModalOpen(false);
  };

  const handleQrCodeClick = (productId) => {
    setSingleSku(productId);
    openQR();
    console.log("Single SKU for QR Code:", singleSku);
  };

  const handleMoreClick = (productId) => {
    setSingleSku(productId);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {selectedCards.length >= 1 && (
        <div
          onClick={openMultiQR}
          className="w-fit  h-fit  rounded-md mt-1 text-white bg-[#0D90C1]"
        >
          <button className="px-4 py-1">Get QR Codes</button>
        </div>
      )}
      {Data?.map((product) => (
        <div key={product.id} className="flex w-full ">
          <input
            type="checkbox"
            checked={selectedCards.includes(product.id)}
            className="text-[#0D90C1] md:w-5 w-7 mr-2 cursor-pointer"
            style={{ accentColor: "#0D90C1" }}
            onChange={() => handleCheckboxChange(product.id)}
          />
          {/* Product Card */}
          <div
            className="flex md:flex-row flex-col justify-center md:items-center gap-8 p-4 rounded-xl border border-[#E65100] md:min-w-[570px] min-w-[200px] cursor-pointer md:max-w-[570px]"
            onClick={redirectToSkuDetails}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[80px] h-[80px]"
              />
              <div className="text-white rounded-sm mt-2 w-fit bg-[#B42700]">
                <p className="px-4 text-sm font-medium">
                  {product.discountText}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg text-black font-bold">{product.name}</p>
              <p className="text-[#0A6C91] font-normal text-base">
                {product.price}{" "}
                <strike className="text-[#949494] text-sm">
                  {product.originalPrice}
                </strike>
              </p>
              <p className="text-sm my-2 text-[#646464]">{product.weight}</p>
              <p
                className="hidden md:block text-sm text-[#949494]"
                dangerouslySetInnerHTML={{
                  __html: insertLineBreaks(product.description),
                }}
              ></p>
              <p className="md:hidden text-sm text-[#949494]">
                {product.description}
              </p>
            </div>

            <div>
              <p className="text-base text-[#646464]">Active Promotion:</p>
              <p className="text-base font-bold text-[#B42700]">
                {product.promotion}
              </p>
              <p className="text-base text-[#646464]">Promoted By</p>
              <p className="text-[#000000] text-lg font-bold">
                {product.promotedBy}
              </p>
              <p className="text-base text-[#646464]">{product.others}</p>
              <div className="flex items-center gap-4">
                <div className="w-fit rounded-md mt-1 text-white bg-[#0D90C1]">
                  <button className="px-4 py-1">Link SKU</button>
                </div>
                <CiBookmark size={24} className="mt-1 text-[#6B696B]" />
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="md:ml-2">
            <IoMdMore
              onClick={() => handleMoreClick(product.id)}
              className="cursor-pointer"
              size={28}
            />
            <AiOutlineQrcode
              size={24}
              className="text-[#6B696B] ml-1 mt-16 cursor-pointer"
              onClick={() => handleQrCodeClick(product.id)}
            />
          </div>
        </div>
      ))}

      {isSingleQR && <SingleQRModal selectedProductId={singleSku} />}
      {isMultiQR && <MultiQRModal selectedProductIds={selectedCards} />}

      <MenuBar
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOptionSelect={(option) => handleOptionSelect(option)}
      />
    </div>
  );
};

export default SkuCard;
