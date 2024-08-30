import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { BiSolidCoupon } from "react-icons/bi";
import { GiToken } from "react-icons/gi";
import SubscriptionManagement from "../components/profile/SubscriptionManagement";
import Info from "../components/profile/Info";
import MyLinkedSKUs from "../components/profile/MyLinkedSKUs";
import PromotionalCoupons from "../components/profile/PromotionalCoupons";
import UtilityTokens from "../components/profile/UtilityTokens";

export const listItems = [
  {
    id: 1,
    label: "Profile",
    icon: CgProfile,
    path: "/customers/profile",
    component: <Info />,
    bgColor: "bg-[#0D90C1]",
  },
  {
    id: 2,
    label: "Subscription Management",
    icon: FaRegMoneyBill1,
    path: "/customers/subscription-management",
    component: <SubscriptionManagement />,
    bgColor: "bg-[#0D90C1]",
  },
  {
    id: 3,
    label: "My Linked SKUs",
    icon: CiLink,
    path: "/customers/my-linked-skus",
    component: <MyLinkedSKUs />,
    bgColor: "bg-[#0D90C1]",
  },
  {
    id: 4,
    label: "Promotional Coupons",
    icon: BiSolidCoupon,
    path: "/customers/promotional-coupons",
    component: <PromotionalCoupons />,
    bgColor: "bg-[#0D90C1]",
  },
  {
    id: 5,
    label: "Utility Tokens",
    icon: GiToken,
    path: "/customers/utility-tokens",
    component: <UtilityTokens />,
    bgColor: "bg-[#0D90C1]",
  },
];

const Profile = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [selectedComponent, setSelectedComponent] = useState(null);
  const selectedItem = listItems.find((item) => item.path === currentPath);

  useEffect(() => {
    if (selectedItem) {
      setSelectedComponent(selectedItem.component);
    }
  }, [selectedItem]);
  return (
    <>
      <main className="md:grid flex mx-2  flex-col md:mx-16  gap-4 my-4 grid-cols-12 ">
        {/*  */}
        <div className="bg-white border rounded-lg shadow-xl md:col-span-4 lg:col-span-3 xl:col-span-2 md:h-[450px] h-[80px]">
          <ul className="capitalize flex md:block md:p-8 text-balance gap-4 px-2 py-2 justify-center items-center md:text-[19px] text-sm">
            {listItems.map((item) => (
              <React.Fragment key={item.id}>
                <li
                  className={`py-2 hidden md:block px-1 rounded cursor-pointer ${
                    currentPath === item.path
                      ? `${item.bgColor} text-white`
                      : "bg-transparent text-black"
                  }`}
                >
                  <Link className=" " to={item.path}>
                    {item.label}
                  </Link>
                </li>
                <hr className="mb-4 mt-2 text-[#6B696B]" />
                {/*  */}
                <div className="mt-4 ">
                  <Link
                    className={`${
                      currentPath === item.path
                        ? ` text-[#00b1f8]`
                        : " text-[#0D90C1]"
                    }
                     md:hidden`}
                    to={item.path}
                  >
                    <item.icon size={28} />
                  </Link>
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className="bg-white border rounded-lg shadow-xl md:col-span-8 lg:col-span-9  xl:col-span-10  col-span-12 h-auto ">
          {selectedComponent}
        </div>
      </main>
    </>
  );
};

export default Profile;
