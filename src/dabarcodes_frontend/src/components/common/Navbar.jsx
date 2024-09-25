import { useEffect, useState } from "react";
import Nav from "../../reusable_components/Nav";
import Logo from "../../reusable_components/Logo";
import NavList from "../../reusable_components/NavList";
import Hamburger from "../../reusable_components/Hamburger";
import Sidebar from "../../reusable_components/Sidebar";
import Button from "../../reusable_components/Button";
import { useModal } from "../../context/ModalContext";
import IconBar from "../../reusable_components/IconBar";
import Search from "../../reusable_components/Search";
import { useAuthStore } from "../../store/authStore";

const NotLogin = [
  { label: "Home", route: "#home" },
  { label: "About us", route: "#about" },
  { label: "Services", route: "#customer" },
  { label: "For retailers", route: "#retailer" },
  { label: "For suppliers", route: "#supplier" },
  { label: "Subscription", route: "#purchase" },
  { label: "Testimonials", route: "#testimonials" },
  { label: "Our Partners", route: "#partners" },
];

const Login = [
  { label: "Categories", route: "/sku-category" },
  { label: "Brands ", route: "/brands" },
  { label: "Linked SKUs", route: "/user/my-skus" },
];

const Navbar = ({ navItems, headerChildren, sidebarChildren }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  const {
    openConnectWalletModal,
    isRoleModalOpen,
    isConnectWalletModalOpen,
    isTokenOpen,
    isProfileModalOpen,
    isNotificitionsOn,
    openCountryList,
  } = useModal();

  useEffect(() => {
    if (
      isConnectWalletModalOpen ||
      isRoleModalOpen ||
      isTokenOpen ||
      isProfileModalOpen ||
      isNotificitionsOn ||
      openCountryList
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
        closeSidebar={closeSidebar}
        items={isAuthenticated ? Login : NotLogin}
        isHR={false}
        className="hidden xl:flex justify-center items-center gap-[40px] text-[16px] font-roboto font-normal leading-[19.2px] text-left text-black"
      />
      {isAuthenticated && <Search className="hidden md:block " />}
      {headerChildren}

      {!isAuthenticated ? (
        <Button
          onClick={openConnectWalletModal}
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
