export const category = [
  { img: "dairy.png", alt: "Description of Image 1", name: "Dairy Products" },
  { img: "frozen.png", alt: "Description of Image 1", name: "Frozen Food" },
  {
    img: "fruits.png",
    alt: "Description of Image 1",
    name: "Fruits and Vegetables",
  },
  { img: "meat.png", alt: "Description of Image 1", name: "Fresh Meat" },
  {
    img: "shelf.png",
    alt: "Description of Image 1",
    name: "Shelf Stable Food",
  },

  {
    img: "fruits.png",
    alt: "Description of Image 1",
    name: "Fruits and Vegetables",
  },
  {
    img: "shelf.png",
    alt: "Description of Image 1",
    name: "Shelf Stable Food",
  },
  { img: "meat.png", alt: "Description of Image 1", name: "Fresh Meat" },
  { img: "dairy.png", alt: "Description of Image 1", name: "Dairy Products" },
  { img: "frozen.png", alt: "Description of Image 1", name: "Frozen Food" },
  {
    img: "shelf.png",
    alt: "Description of Image 1",
    name: "Shelf Stable Food",
  },

  { img: "meat.png", alt: "Description of Image 1", name: "Fresh Meat" },
];
import { Link } from "react-router-dom";

const basePath = "/category";
const Category_Promotion = () => {
  return (
    <>
      <div className="flex  mx-4  text-balance md:justify-between mt-2 md:mx-20  font-semibold">
        <p className="lg:text-[22px] ">Explore Promotions by Category</p>
        <Link
          to="/customers/category"
          className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
        >
          View All
        </Link>
      </div>
      <div className="flex gap-4 lg:mx-16 md:mx-4 my-8 scroll-smooth hide-scrollbar cursor-pointer   overflow-x-auto justify-center ">
        {category.map((item, index) => (
          <Link
            to="/products"
            key={index}
            className="text-center flex-shrink-0"
          >
            <div className="image-item">
              <img
                src={`${basePath}/${item.img}`}
                alt={item.alt}
                className="w-52 h-24  object-cover"
              />
            </div>
            <p className="text-[16px] font-medium capitalize">{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category_Promotion;
