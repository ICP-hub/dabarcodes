import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useModal } from "../../../context/ModalContext";

const QR_Details = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { closeQR } = useModal();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="max-w-xl mx-auto bg-white rounded-lg ">
        <p className="flex justify-end cursor-pointer">
          <X onClick={closeQR} />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-4">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img
                src={`/${product.image}`}
                alt="Nestle Ice Coffee"
                className="w-20 h-20 rounded-lg mr-4"
              />
              <h2 className="text-lg  font-semibold">Nestle Ice Coffee</h2>
            </div>

            <div className="my-4">
              <p className="text-sm text-gray-500">
                $37 <span className="line-through">$52</span>
              </p>
              <p className="text-sm text-gray-500">300g Pouch</p>
              <div className="my-4 text-white rounded-sm  w-fit bg-[#B42700]">
                <p className="px-4 text-sm font-medium">$15 off</p>
              </div>
              {/*  */}
              <p className="text-sm text-[#646464]">Active Promotion:</p>
              <p className="text-sm font-bold text-[#B42700]">
                Valid Until 2024, Sept 19
              </p>
              <p className="text-sm mt-2 text-[#646464]">Promoted By</p>
              <p className="text-[#000000] text-sm font-bold">Urban Grocers</p>
              <p className="text-sm text-[#646464]">+3 others</p>

              <p className="text-xs mt-2 text-gray-500">
                Super smooth and creamy vanilla half and half crowned with a
                rich, bold coffee essence, perfectly blended to deliver an
                indulgent and refreshing iced coffee experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center md:justify-end">
            <img
              src="/image 63.png"
              alt="QR Code"
              className="md:w-60 md:h-60 w-32 h-32"
            />
            <div className="mb-4 mt-4 text-sm">
              <div className="flex justify-between w-40">
                <p className="font-semibold">Brand</p>
                <p>Nestle</p>
              </div>
              <div className="flex justify-between w-40">
                <p className="font-semibold">Flavor</p>
                <p>Vanilla</p>
              </div>
              <div className="flex justify-between w-40">
                <p className="font-semibold">Consistency</p>
                <p>Creamy</p>
              </div>
              <div className="flex justify-between w-40">
                <p className="font-semibold">Item Weight</p>
                <p>500g</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 w-[220px]">
          <p className="text-sm font-semibold mb-2">Participating Retailer</p>
          <div className="border border-gray-300 rounded p-2 bg-gray-50">
            <p className="text-sm text-gray-700">GIT Retailer Ltd.</p>
          </div>
        </div>

        <div className="mb-4">
          <button
            className="flex items-center justify-between w-full bg-gray-100 p-2 rounded hover:bg-gray-200"
            onClick={toggleDropdown}
          >
            <span className="font-semibold">Previous Redemption</span>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {isOpen && (
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left border-b border-gray-200">
                      Date
                    </th>
                    <th className="p-2 text-left border-b border-gray-200">
                      Promotion Name
                    </th>
                    <th className="p-2 text-left border-b border-gray-200">
                      Discount Amount
                    </th>
                    <th className="p-2 text-left border-b border-gray-200">
                      Net Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      date: "2024, Sept 15",
                      promo: "$10 Off on Nestle Ice Coffee",
                      discount: "$10.00",
                      net: "$30.00",
                    },
                    {
                      date: "July 10, 2024",
                      promo: "Buy 1 Get 1 Free - Nestle Ice C...",
                      discount: "$10.00",
                      net: "$30.00",
                    },
                    {
                      date: "June 22, 2024",
                      promo: "$5 Off on Nestle Ice Coffee",
                      discount: "$10.00",
                      net: "$30.00",
                    },
                    {
                      date: "June 2, 2024",
                      promo: "$10 Off on Nestle Ice Coffee",
                      discount: "$10.00",
                      net: "$30.00",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#E7F8FE]" : ""}
                    >
                      <td className="p-2 border-b border-gray-200">
                        {row.date}
                      </td>
                      <td className="p-2 border-b border-gray-200">
                        {row.promo}
                      </td>
                      <td className="p-2 border-b border-gray-200">
                        {row.discount}
                      </td>
                      <td className="p-2 border-b border-gray-200">
                        {row.net}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QR_Details;
