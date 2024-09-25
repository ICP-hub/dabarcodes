import { FaUser } from "react-icons/fa";
import { TbClockDollar } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
const ProfileSidebar = ({ selectedLabel, onSelectLabel }) => {
  const items = [
    { label: "Profile", icon: <FaUser size={24} />, name: "profile" },
    {
      label: "Subscription",
      icon: <TbClockDollar size={24} />,
      name: "subscription",
    },
    { label: "My SKUs", icon: <CiShoppingCart size={28} />, name: "my-skus" },
    {
      label: "My Utility Tokens",
      icon: <GiTwoCoins size={28} />,
      name: "my-utility-tokens",
    },
    {
      label: "Settings",
      icon: <IoSettingsOutline size={24} />,
      name: "settings",
    },
  ];

  const handleItemClick = (label) => {
    onSelectLabel(label);
  };

  return (
    <>
      <div className=" flex justify-center md:justify-start md:flex-col sm_md:flex-col    my-4 md:mx-8  rounded-lg md:h-[500px] h-full  mx-4  sm_md:ml-2 sm_md:mr-0 sm_md:w-fit md:w-fit  bg-[#B5E8FB]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex   items-center  md:w-[177px] px-2 md:px-4 md:pb-0 pb-4 pt-4  `}
            onClick={() => handleItemClick(item.name)}
          >
            <button
              title={`${item.label}`}
              type="button"
              className={` 
                ${
                  selectedLabel === item.name
                    ? "bg-[#E7F8FE] text-black font-semibold"
                    : ""
                }
                flex     items-center justify-between h-12 w-full rounded-md p-2 md:p-3`}
            >
              <div className=" md:hidden place-items-center">{item.icon}</div>
              <p className="md:block hidden    font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                {item.label}
              </p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileSidebar;
