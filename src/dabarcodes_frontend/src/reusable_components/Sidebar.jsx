import { useEffect, useRef } from "react";
import Hamburger from "./Hamburger";
import NavList from "./NavList";
import Button from "./Button";
import { useModal } from "../context/ModalContext";
import IconBar from "./IconBar";
import Search from "./Search";
import { useAuthStore } from "../store/authStore";

const Sidebar = ({
  isOpen,
  closeSidebar,
  navItems,
  childrenPosition = "below",
  children,
}) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeSidebar]);

  //
  const { openConnectWalletModal } = useModal();
  //
  const { isAuthenticated } = useAuthStore();

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 bg-white z-50 border-l border-gray-200 shadow-lg transform ${
        isOpen
          ? "translate-x-0 scale-100 opacity-100"
          : "translate-x-full scale-95 opacity-100"
      } transition-transform duration-300 ease-in-out w-full sm:w-[40%] md:w-[50%] lg:w-[45%] xl:hidden hide-scrollbar`}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <div className="p-4">
        <Hamburger onClick={closeSidebar}>&times;</Hamburger>
        {isAuthenticated && <IconBar className="flex lg:hidden pt-4 pl-4" />}
        {isAuthenticated && <Search className=" mt-4 md:hidden  " />}

        {childrenPosition === "above" && children}

        <NavList
          closeSidebar={closeSidebar}
          items={navItems}
          isHR={true}
          className="mt-8 text-center sm:text-left flex flex-col gap-4 text-lg"
        />

        {childrenPosition === "below" && children}
        {!isAuthenticated && (
          <Button
            onClick={openConnectWalletModal}
            divClassName="mt-auto p-4"
            buttonClassName="w-full"
          >
            Login/Signup
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
