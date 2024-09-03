import { FaDirections } from "react-icons/fa";
const Shop_card = ({ datas }) => {
  return (
    <>
      {datas.map((data) => (
        <div
          className="border md:min-w-[378px] px-4 py-6 rounded-xl shadow-lg"
          key={data.id}
        >
          <div className="flex gap-4">
            <img className="w-12  h-12" src={data.image} alt="" />
            <div>
              <p className="font-semibold text-base text-black">
                {data.shopName}
              </p>
              <p className="text-[#646464] text-sm font-normal">
                {" "}
                {data.address}
              </p>
            </div>
          </div>
          <p className="mt-2 text-[#646464] text-sm font-normal">
            Store Timing:{" "}
            <span className="text-base font-semibold text-black">
              {data.timing}
            </span>
          </p>

          <div className="flex gap-4  justify-between mt-4">
            <p className="text-[#0D90C1] font-bold text-base text-balance">
              {data.promotions}+ active promotions
            </p>
            <div className="cursor-pointer flex items-center justify-center gap-1">
              <p className="text-[#646464] text-balance">Get Directions</p>
              <FaDirections size={24} className="mt-1 text-[#646464]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Shop_card;
