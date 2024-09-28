import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";

const insertLineBreaks = (text, interval = 29) => {
  const parts = [];
  for (let i = 0; i < text.length; i += interval) {
    parts.push(text.substring(i, i + interval));
  }
  return parts.join("<br />");
};

const Long_product_card = ({ Data }) => {
  const { openLinkItemModal } = useModal();
  const navigate = useNavigate();

  const openModal = (event) => {
    event.stopPropagation();
    openLinkItemModal();
  };

  const redirectToSkuDetails = () => {
    navigate("/sku-details");
  };
  return (
    <>
      {Data?.map((product) => (
        <div
          onClick={redirectToSkuDetails}
          key={product.id}
          className="flex md:flex-row flex-col justify-center md:items-center gap-8 p-4 rounded-xl border border-[#E65100] md:min-w-[570px] min-w-[280px] cursor-pointer md:max-w-[570px]"
        >
          <div className=" flex flex-col justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[80px]  h-[80px]"
            />
            <div className="text-white rounded-sm mt-2 w-fit bg-[#B42700]">
              <p className="px-4 text-sm roboto-medium">
                {product.discountText}
              </p>
            </div>
          </div>
          <div>
            <p className="text-base roboto-bold text-black ">{product.name}</p>
            <p className="text-[#0A6C91] text-base roboto-regular">
              {product.price}{" "}
              <strike className="text-[#949494] roboto-regular text-sm">
                {product.originalPrice}
              </strike>
            </p>
            <p className="text-sm roboto-regular my-2 text-[#646464]">
              {product.weight}
            </p>
            <p
              className="hidden md:block text-sm roboto-regular text-[#949494]"
              dangerouslySetInnerHTML={{
                __html: insertLineBreaks(product.description),
              }}
            ></p>
            <p className="md:hidden text-sm roboto-regular text-[#949494]">
              {product.description}
            </p>
          </div>
          <div>
            <p className="text-base roboto-regular text-[#646464]">
              Active Promotion:
            </p>
            <p className="text-base roboto-bold text-[#B42700]">
              {product.promotion}
            </p>
            <p className="text-base roboto-regular text-[#646464]">
              Promoted By
            </p>
            <p className="text-[#000000] roboto-bold text-lg ">
              {product.promotedBy}
            </p>
            <p className="text-base roboto-regular text-[#646464]">
              {product.others}
            </p>
            <div className="flex items-center gap-4">
              <div
                onClick={openModal}
                className="w-fit rounded-md mt-1 text-white btn roboto-medium text-sm "
              >
                <button className="px-4 py-2">Link SKU</button>
              </div>
              <CiBookmark size={24} className="mt-1 text-[#6B696B]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Long_product_card;
