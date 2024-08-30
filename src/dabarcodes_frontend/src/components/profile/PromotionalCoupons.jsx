import React from "react";
import DoughnutChart from "../../reusable_components/DoughnutChart";
import { IoIosGift } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FcExpired } from "react-icons/fc";
const PromotionalCoupons = () => {
  const data = [1, 2, 1, 1]; // Example data
  const labels = [
    "Active Now ", // RiDiscountPercentLine
    " Upcoming Promotions", // FaSackDollar
    "Expiring Soon", // <FcExpired />
    "EXpired", // IoIosGift
  ]; // Example labels
  const iconMap = {
    discount: RiDiscountPercentLine,
    sack: FaSackDollar,
    expired: FcExpired,
    gift: IoIosGift,
  };

  const colors = [
    { background: "#54FE7C", border: "#54FE7C" },
    // { background: "#F1E7FE", border: "#F1E7FE" },
    { background: "#0C90EE", border: "#0C90EE" },
    { background: "#FFA38A", border: "#FFA38A" },
    { background: "#E7E3E7", border: "#E7E3E7" },
  ];
  const centerText = {
    label: "Total  Promotions", // Text to show above the value
    value: data.reduce((acc, cur) => acc + cur, 0),
  };
  const items = generateItems(data, labels, colors, iconMap);
  console.log(items);

  return (
    <>
      <h2 className="text-xl text-center lg:text-start font-bold m-8 mb-2">
        Promotional Coupons
      </h2>
      <div className="mb-8 m-8 flex lg:flex-row flex-col justify-center items-center lg:items-start lg:justify-between">
        {/* Circle Visualization */}
        <div className="flex md:flex-row flex-col items-center mb-4">
          <DoughnutChart
            data={data}
            labels={labels}
            colors={colors}
            centerText={centerText}
          />

          <div className="ml-4">
            <ul>
              {labels.map((label, index) => (
                <li key={index} className="flex  items-center">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-4 "
                    style={{ backgroundColor: colors[index].background }}
                  ></span>
                  {label}: {data[index]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Card data={items} />
    </>
  );
};

export default PromotionalCoupons;

const Card = ({ data }) => {
  return (
    <>
      <div className="gap-4 flex flex-col p-4  ">
        {data.map((product) => (
          <div
            key={product.id}
            className={`  lg:justify-between  items-center lg:flex rounded-xl  relative  text-[#E7F8FE]`}
            style={{ backgroundColor: product.bgColor }}
          >
            <div className=" p-8 lg:p-4  ">
              <div className="flex md:text-nowrap gap-8">
                <p> {product.status}</p>

                <p>Reedeem Online</p>
              </div>
              <div className="flex  items-center gap-4">
                {product.iconName}
                <div className="p-2 space-y-1 capitalize text-[#E7F8FE]` ">
                  <p className="font-semibold text-xl ">BUNDLE OFF</p>
                  <p className="text-sm ">On Frozen Peoducts and Fruits</p>
                </div>
              </div>
            </div>
            <div
              className="lg:p-4 w-[200px] px-2 pb-4 text-[#E7F8FE]` flex
          justify-center  "
            >
              <button
                className={`
                text-[#0D90C1]
                 bg-[#DBF4FD]
               rounded-md px-6 py-1`}
              >
                Reedem
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const generateItems = (data, labels, colors, iconMap) => {
  let items = [];
  const label = [
    "Active till August, 29 ", // RiDiscountPercentLine
    " Deal Launching on, July, 29", // FaSackDollar
    " Expiring on 12 may", // <FcExpired />
    "EXpired", // IoIosGift
  ];

  data.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      const iconKey = Object.keys(iconMap)[index]; // Get the icon key
      const IconComponent = iconMap[iconKey];
      items.push({
        id: items.length + 1, // Ensure unique ID
        name: labels[index],
        bgColor: colors[index].background,
        status: label[index],
        iconName: <IconComponent className="text-[#E7F8FE]`" size={50} />,
      });
    }
  });

  return items;
};
