import { MdDashboard } from "react-icons/md";
import { LuHome, LuLayers } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaCheckSquare } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = ({ selectedLabel, onSelectLabel }) => {
  const items = [
    { label: "Dashboard", icon: <LuHome size={24} /> },
    { label: "Promotion Management", icon: <MdDashboard size={24} /> },
    { label: "SKU Management", icon: <LuLayers size={24} /> },
    { label: "Token Management", icon: <FaCheckSquare size={24} /> },
    { label: "Analytics and Report", icon: <FiPieChart size={24} /> },
    { label: "Customer Engagement", icon: <CgProfile size={24} /> },
  ];

  const anotheritems = [
    { label: "Notifications", icon: <IoMdNotificationsOutline size={24} /> },
    { label: "Settings", icon: <VscSettings size={24} /> },
  ];

  const [isShow, setIsShow] = useState(false);
  const handleItemClick = (label) => {
    onSelectLabel(label); // Existing functionality
    setIsShow(false); // New functionality to close the sidebar
  };
  const sidebarRef = useRef(null);

  // Handle click outside of the sidebar
  const handleOutsideClick = (e) => {
    // Check if the click was outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      {!isShow && (
        <RxHamburgerMenu
          onClick={() => setIsShow(true)}
          size={32}
          className=" mx-8 mt-4 cursor-pointer"
        />
      )}

      <div
        className={`${
          isShow
            ? "translate-x-0 scale-100 opacity-100"
            : "-translate-x-full scale-90 opacity-0"
        } 
        z-50
  transition-transform transform fixed top-0 left-0 h-full w-full sm:w-[320px] bg-white shadow-2xl border border-gray-300  overflow-y-auto
  hide-scrollbar 
 
  `}
        ref={sidebarRef}
      >
        <div class="flex sticky top-0 bg-white z-999  justify-between  gap-4 p-4 mb-2 border-b-2  ">
          <img src="/image.png" alt="brand" class="w-[135px] h-[41px]" />
          <RiCloseLargeLine
            onClick={() => setIsShow(false)}
            size={24}
            className="text-xl cursor-pointer  "
          />
        </div>
        {/* md:relative md:translate-x-0 md:scale-100 md:opacity-100 */}
        <div className="flex flex-col justify-between z-0">
          {/* first nav */}
          <nav class="flex  min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <div class=" block w-full">
              {items.map((item, index) => (
                <div
                  role="button"
                  key={index}
                  className={`flex  items-center w-full p-0 ${
                    selectedLabel === item.label
                      ? "bg-[#B5E8FB] text-black font-semibold"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-3"
                  >
                    <div className="grid mr-4 place-items-center">
                      {item.icon}
                    </div>
                    <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                      {item.label}
                    </p>
                  </button>
                </div>
              ))}
            </div>

            <hr class="my-2 border-blue-gray-50" />
          </nav>

          {/* second  nav */}
          <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <div class="relativ block w-full">
              {anotheritems.map((item, index) => (
                <div
                  role="button"
                  className={`flex  items-center w-full p-0 ${
                    selectedLabel === item.label
                      ? "bg-[#B5E8FB] text-black font-semibold"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-3"
                  >
                    <div className="grid mr-4 place-items-center">
                      {item.icon}
                    </div>
                    <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                      {item.label}
                    </p>
                  </button>
                </div>
              ))}
            </div>

            <hr class="my-2 border-blue-gray-50" />
          </nav>
          {/* end of nav */}
        </div>
        <div class="   gap-6 flex p-2">
          <div class=" w-full  relativ shadow-black shadow-2xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform border">
            <div class="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                class="w-12 group-hover:w-20 group-hover:h-20 h-12 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
              />
              <div class="w-fit transition-all transform duration-500">
                <h1 class="text-black font-bold">Mary Phiri</h1>
                <p class="text-gray-400">@Mary </p>
                <a class="text-xs text-black group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                  mary@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

//

//
