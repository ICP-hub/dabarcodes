import { Link } from "react-router-dom";
import { category } from "../components/customer/giftCarddata";

const Explore_catagory = () => {
  return (
    <>
      <div className="flex  mx-4  text-balance justify-between my-4 md:mx-8  ">
        <p className="md:text-xl text-base roboto-bold  ">
          Explore By Category
        </p>
        <Link
          to="/sku-category"
          className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
        >
          View All
        </Link>
      </div>
      <div className="mx-4 my-8 cursor-pointer">
        <div className=" flex  flex-wrap md:flex-nowrap items-center justify-center gap-6  md:flex  md:gap-16 md:overflow-x-auto md:scroll-smooth hide-scrollbar">
          {category.map((item, index) => (
            <div key={item?.img} className="w-[128px] md:flex-shrink-0">
              <Link
                to={`/sku/${item.name}`}
                key={index}
                className="text-center flex-shrink-0"
              >
                <div className="">
                  <img
                    src={`/${item.img}`}
                    alt={item.alt}
                    className="md:w-28 md:h-28 w-20 h-20 object-contain"
                  />
                </div>
                <p className="md:text-[16px] hover:font-bold text-balance text-start md:text-center font-medium capitalize ">
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore_catagory;
