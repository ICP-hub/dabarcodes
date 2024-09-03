import { Link } from "react-router-dom";
import { category } from "../components/customer/giftCarddata";

const Explore_catagory = () => {
  return (
    <>
      <h1 className="text-center font-bold text-xl my-">Explore by Category</h1>
      <div className="flex gap-16 mx-4   my-8 scroll-smooth hide-scrollbar cursor-pointer   overflow-x-auto md:justify-start justify-center   ">
        {category.map((item, index) => (
          <div className="w-[128px] ">
            <Link
              to="/sku-category"
              key={index}
              className="text-center flex-shrink-0 "
            >
              <div className="">
                <img
                  src={`/${item.img}`}
                  alt={item.alt}
                  className="min-w-28 min-h-28 object-contain   "
                />
              </div>
              <p className="text-[16px] hover:font-bold   text-balance font-medium capitalize">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Explore_catagory;
