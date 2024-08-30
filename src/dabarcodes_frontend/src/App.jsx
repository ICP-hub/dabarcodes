import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import Footer from "./components/Footer";
import Customer_Home from "./pages/Customer_Home";
import { ModalProvider, useModal } from "./context/ModalContext";
import ConnectWallet from "./components/authentication/ConnectWallet";
import Role from "./components/authentication/Role";
import NotificationsModal from "./components/customer/modal/NotificationsModal";
import ProfileModal from "./components/customer/modal/ProfileModal";
import TokensModal from "./components/customer/modal/TokensModal";
import CoupanModal from "./components/customer/modal/CoupanModal";
import { useEffect } from "react";

import Navbar from "./components/common/Navbar";
import Breadcrumb from "./components/customer/Breadcrumb";
import Profile from "./pages/Profile";
import CategoryDetail from "./components/customer/CategoryDetail";
import PromotionDetail from "./components/customer/PromotionDetail";
import Products from "./pages/Products";
import SKULIST from "./pages/SKULIST";
import Product_Details from "./pages/Product_Details";
import CoupanDetails from "./components/customer/CoupanDetails";
import Retailer from "./pages/Retailer";
import MultiStepForm from "./components/authentication/MultiStepForm";
import LinkedSku from "./components/customer/modal/LinkedSku";

const AppContent = () => {
  const {
    isRoleModalOpen,
    isConnectWalletModalOpen,
    isTokenOpen,
    isProfileModalOpen,
    isNotificitionsOn,
    isCoupanOn,
    linkedSKU,
  } = useModal();
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    requestAnimationFrame(() => {
      setTimeout(scrollToTop, 0);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<MultiStepForm />} />

        <Route path="/purchase" element={<Purchase />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product_Details />} />
        <Route path="/coupan-details" element={<CoupanDetails />} />

        <Route path="/sku-list" element={<SKULIST />} />

        <Route path="/customers" element={<Customer_Home />} />
        <Route path="/customers/category" element={<CategoryDetail />} />
        <Route
          path="/customers/promtoion-details"
          element={<PromotionDetail />}
        />

        <Route path="/customers/:id" element={<Profile />} />
        <Route path="/retailer" element={<Retailer />} />
      </Routes>
      <Footer />
      {/* Modals */}
      {isRoleModalOpen && <Role />}
      {isConnectWalletModalOpen && <ConnectWallet />}
      {isNotificitionsOn && <NotificationsModal />}
      {isProfileModalOpen && <ProfileModal />}
      {isTokenOpen && <TokensModal />}
      {isCoupanOn && <CoupanModal />}
      {linkedSKU && <LinkedSku />}
    </>
  );
};

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
