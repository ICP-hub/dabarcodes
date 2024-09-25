import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useAuthStore } from "./store/authStore";
import { ModalProvider, useModal } from "./context/ModalContext";

//constant components
const Navbar = lazy(() => import("./components/common/Navbar"));
const Breadcrumb = lazy(() => import("./components/customer/Breadcrumb"));
const Footer = lazy(() => import("./components/Footer"));

//pages
const Home = lazy(() => import("./pages/Home"));
const Customer_Home = lazy(() => import("./pages/Customer_Home"));
const Retailer = lazy(() => import("./pages/Retailer"));
const MultiStepForm = lazy(() =>
  import("./components/authentication/MultiStepForm")
);
const Sku_category = lazy(() =>
  import("./customer_home_page/others/sku_category")
);
const SkuDetails = lazy(() => import("./customer_home_page/others/SkuDetails"));
const All_Top_SKU = lazy(() =>
  import("./customer_home_page/others/All_Top_SKU")
);
const ProfileInfo = lazy(() => import("./pages/ProfileInfo"));
const Pricing = lazy(() => import("./pages/Pricing"));
const StoreInfo = lazy(() => import("./pages/StoreInfo"));
const All_retailers = lazy(() =>
  import("./customer_home_page/others/All_retailers")
);
const Brands = lazy(() => import("./customer_home_page/others/Brands"));
const RetailerForm = lazy(() =>
  import("./components/Retailers/create-account/RetailerForm")
);
const Login = lazy(() => import("./components/authentication/Login"));
const GetSkuByCategoryName = lazy(() =>
  import("./customer_home_page/others/GetSkuByCategoryName")
);

//
// Modals route
import Role from "./components/authentication/Role";
import ConnectWallet from "./components/authentication/ConnectWallet";
import NotificationsModal from "./components/customer/modal/NotificationsModal";
import ProfileModal from "./components/customer/modal/ProfileModal";
import TokensModal from "./components/customer/modal/TokensModal";
import CoupanModal from "./components/customer/modal/CoupanModal";
import LinkedSku from "./components/customer/modal/LinkedSku";
import CountryList from "./components/customer/modal/CountryList";

const AppContent = () => {
  const location = useLocation();
  const {
    isRoleModalOpen,
    isConnectWalletModalOpen,
    isTokenOpen,
    isProfileModalOpen,
    isNotificitionsOn,
    isCoupanOn,
    linkedSKU,
    isCountryList,
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
  }, [location]);

  //
  const { isAuthenticated } = useAuthStore();

  //
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Breadcrumb />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Customer_Home /> : <Home />}
          />
          <Route path="/user/:id" element={<ProfileInfo />} />
          <Route path="/retailer" element={<Retailer />} />
          <Route path="/create-account" element={<MultiStepForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/retailer-account" element={<RetailerForm />} />
          <Route path="/sku-category" element={<Sku_category />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/sku-details" element={<SkuDetails />} />
          <Route path="/All-Top-SKU" element={<All_Top_SKU />} />
          <Route path="/sku/:name" element={<GetSkuByCategoryName />} />

          <Route path="/store/:name" element={<StoreInfo />} />
          <Route path="/all-retailers" element={<All_retailers />} />
          <Route path="/subscription-plans" element={<Pricing />} />
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
        {isCountryList && <CountryList />}
      </Suspense>
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
