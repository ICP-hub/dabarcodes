import React, { useState, useRef, useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Shop_card from "../../reusable_components/Shop_card";
import { productData, Shops } from "../../components/customer/giftCarddata";
import Product_card from "../Product_card";
import { GoPerson } from "react-icons/go";
import { useModal } from "../../context/ModalContext";

const SkuDetails = () => {
  const { openLinkItemModal } = useModal();

  return (
    <>
      <div className="md:grid   grid-cols-12 my-20 xl:mx-20 mx-8  ">
        {/* 1 */}
        <div className="lg:col-span-3 md:col-span-5 gap-2 flex  flex-col  ">
          <img src="drinks.png" alt="Drink" class="w-[278px] h-[278px]" />

          {/*  */}
          <div className="w-[240px] ">
            <ul className="flex  justify-between  ">
              <li className="text-sm roboto-bold  ">Flavor Peanut</li>
              <li className="text-sm roboto-regular">Strawberry</li>
            </ul>
            <ul className="flex  justify-between  ">
              <li className="text-sm roboto-bold ">Brand</li>
              <li className="text-sm roboto-regular">Kwality wall’s</li>
            </ul>
            <ul className="flex  justify-between  ">
              <li className="text-sm roboto-bold ">Speciality</li>
              <li className="text-sm roboto-regular">Sweetened</li>
            </ul>
            <ul className="flex  justify-between  ">
              <li className="text-sm roboto-bold ">Item Weight</li>
              <li className="text-sm roboto-regular">0.47 kg</li>
            </ul>
          </div>
        </div>
        <hr className=" mb-2 mt-2 md:hidden border-t-[0.5px] border-[#6B696B]" />

        {/*  */}
        <div className="lg:col-span-9 md:mt-0 mt-8 md:col-span-7  md:ml-8 ">
          <div className="flex md:justify-between">
            <p className="text-xl  text-balance text-black roboto-bold">
              Nestle Ice Coffe
            </p>

            <div className="flex items-center  justify-end gap-4">
              <div
                onClick={openLinkItemModal}
                className="w-fit rounded-md mt-1 text-white btn"
              >
                <button className="px-6 py-1">Link SKU</button>
              </div>
              <CiBookmark size={24} className="mt-1 text-[#6B696B]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#0A6C91] roboto-regular  text-base">
              $37{" "}
              <strike className="text-[#949494] text-xs roboto-regular ">
                $52
              </strike>
            </p>
          </div>
          <p className="text-xs roboto-regular text-[#646464]">500g Pouch</p>
          <div className="mb-4 text-white rounded-sm mt-2 w-fit bg-[#B42700]">
            <p className="px-4  text-sm roboto-bold">$15 off</p>
          </div>
          <p className="text-xs mb-2 roboto-bold text-[#0A6C91]">
            Valid Untill 2024, sept 19
          </p>
          {/*  */}
          <p className=" text-xs roboto-regular text-[#646464]">Promoted By</p>
          <p className="text-[#000000]  text-sm roboto-medium">Urban Grocers</p>
          <p className="text-xs roboto-regular  text-[#646464]">+3 others</p>
          <div className="lg:w-[420px]">
            <hr className=" mb-2 mt-2 border-t-[0.5px] border-[#6B696B]" />
            <p className="f text-sm roboto-regular ">
              Super smooth and creamy vanilla half and half crowned with a rich,
              bold coffee essence, perfectly blended to deliver an indulgent and
              refreshing iced coffee experience.
            </p>
            <hr className=" mb-2 mt-2 border-t-[0.5px] border-[#6B696B]" />
          </div>

          <DropdownSelect />
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="xl:mx-20 mx-8 ">
        <p className="md:text-xl text-base   roboto-bold ">
          Participating Retailers
        </p>

        <div className=" flex   gap-4 mt-2 overflow-x-auto  hide-scrollbar mb-8 ">
          <Shop_card datas={Shops} />
        </div>
      </div>

      <div>
        <p className="md:text-xl text-base text-center my-16 roboto-bold ">
          You might also likes
        </p>
        <div className=" flex mx-8  gap-4 mt-2 overflow-x-auto  hide-scrollbar mb-8 ">
          <Product_card data={productData} />
        </div>
      </div>
    </>
  );
};

export default SkuDetails;

const DropdownSelect = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const items = [
    { id: 1, img: "https://via.placeholder.com/40", name: "@username1" },
    { id: 2, img: "https://via.placeholder.com/40", name: "@username2" },
    { id: 3, img: "https://via.placeholder.com/40", name: "@username3" },
    { id: 4, img: "https://via.placeholder.com/40", name: "@username4" },
    { id: 5, img: "https://via.placeholder.com/40", name: "@username5" },
    { id: 6, img: "https://via.placeholder.com/40", name: "@username6" },
  ];

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-64">
      <div className="relative" ref={dropdownRef}>
        <p className=" text-base roboto-bold">Select Participating Retailer</p>
        <div
          className={`${
            isOpen && "border-2"
          } flex items-center border  border-[#0D90C1] rounded px-4 py-2 cursor-pointer `}
          onClick={toggleDropdown}
        >
          {selectedItem ? (
            <img
              src={selectedItem.img}
              alt="user"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <GoPerson className="text-gray-400 w-8 h-8" />
          )}
          <input
            type="text"
            value={selectedItem ? selectedItem.name : ""}
            placeholder="Select"
            readOnly
            className="ml-2 flex-grow text-gray-500 placeholder-gray-400 focus:outline-none"
          />
          <FaChevronDown className="text-gray-500" />
        </div>

        {isOpen ? (
          <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded shadow-lg max-h-48 hide-scrollbar overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(item)}
              >
                <img
                  src={item.img}
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm roboto-regular ">See Retailer’s Details</p>
        )}
      </div>
    </div>
  );
};
