import React, { useEffect } from "react";
import DaBarcodesInfo from "../components/home/DaBarcodesInfo";
import Hero from "../components/home/Hero";
import Customer from "../components/home/Customer";
import Retailer from "../components/home/Retailer";
import Supplier from "../components/home/Supplier";
import Subscription from "../components/home/Subscription";
import Testimonials from "../components/home/Testimonials";
import Partners from "../components/home/Partners";
import Navbar from "../components/common/Navbar";
import Search from "../reusable_components/Search";

const Home = () => {
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
      <Hero />
      <DaBarcodesInfo />
      <Customer />
      <Retailer />
      <Supplier />
      <Subscription />
      <Testimonials />
      <Partners />
    </>
  );
};

export default Home;
