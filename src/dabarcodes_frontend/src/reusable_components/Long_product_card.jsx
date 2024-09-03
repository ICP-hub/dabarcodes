import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Long_product_card = ({ Data }) => {
  const navigate = useNavigate();

  const redirectToSkuDetails = () => {
    navigate("/sku-details");
  };
  return (
    <>
      {Data?.map((product) => (
        <div
          onClick={redirectToSkuDetails}
          key={product.id}
          className="flex md:flex-row flex-col justify-center items-center gap-8 p-4 rounded-xl border border-[#E65100] md:min-w-[570px] min-w-[280px] cursor-pointer md:max-w-[570px]"
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
            <div className="text-white rounded-sm mt-2 w-fit bg-[#B42700]">
              <p className="px-4 text-sm font-medium">{product.discountText}</p>
            </div>
          </div>
          <div>
            <p className="text-lg text-black font-bold">{product.name}</p>
            <p className="text-[#0A6C91] font-normal text-base">
              {product.price}{" "}
              <strike className="text-[#949494] text-sm">
                {product.originalPrice}
              </strike>
            </p>
            <p className="text-sm my-2 text-[#646464]">{product.weight}</p>
            <p className="text-sm text-[#949494]">{product.description}</p>
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
      ))}
    </>
  );
};

export default Long_product_card;
