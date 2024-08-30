import { useEffect, useState } from "react";
import Nav from "../../reusable_components/Nav";
import Logo from "../../reusable_components/Logo";
import NavList from "../../reusable_components/NavList";
import Hamburger from "../../reusable_components/Hamburger";
import Sidebar from "../../reusable_components/Sidebar";
import Button from "../../reusable_components/Button";
import { useModal } from "../../context/ModalContext";
import { useAuthStore } from "../../../../store/authStore";
import IconBar from "../../reusable_components/IconBar";
import Search from "../../reusable_components/Search";

const NotLogin = [
  { label: "Home", route: "#home" },
  { label: "About us", route: "#about" },
  { label: "Services", route: "/" },
  { label: "For retailers", route: "/retailer" },
  { label: "For suppliers", route: "#supplier" },
  { label: "Subscription", route: "/purchase" },
  { label: "Testimonials", route: "#testimonials" },
  { label: "Our Partners", route: "#partners" },
];

const Login = [
  { label: "Categories", route: "/customers/category" },
  { label: "Promotions ", route: "/customers/promtoion-details" },
  { label: "Linked SKUs", route: "/sku-list" },
];

const Navbar = ({ navItems, headerChildren, sidebarChildren }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  const {
    openRoleModal,
    isRoleModalOpen,
    isConnectWalletModalOpen,
    isTokenOpen,
    isProfileModalOpen,
    isNotificitionsOn,
  } = useModal();

  useEffect(() => {
    if (
      isConnectWalletModalOpen ||
      isRoleModalOpen ||
      isTokenOpen ||
      isProfileModalOpen ||
      isNotificitionsOn
    ) {
      setIsSidebarOpen(false);
    }
  }, [
    isConnectWalletModalOpen,
    isRoleModalOpen,
    isProfileModalOpen,
    isTokenOpen,
    isNotificitionsOn,
  ]);

  return (
    <Nav>
      <Logo />

      <NavList
        items={isAuthenticated ? Login : NotLogin}
        isHR={false}
        className="hidden xl:flex justify-center items-center gap-[40px] text-[16px] font-roboto font-normal leading-[19.2px] text-left text-black"
      />
      {isAuthenticated && <Search className="hidden md:block " />}
      {headerChildren}

      {!isAuthenticated ? (
        <Button
          onClick={openRoleModal}
          divClassName="hidden xl:flex"
          buttonClassName="ml-[28px]"
        >
          Login/Signup
        </Button>
      ) : (
        <IconBar className="hidden lg:flex" />
      )}

      <Hamburger onClick={openSidebar}> &#9776; </Hamburger>

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        navItems={isAuthenticated ? Login : NotLogin}
        childrenPosition="above"
      >
        {sidebarChildren}
      </Sidebar>
    </Nav>
  );
};

export default Navbar;
