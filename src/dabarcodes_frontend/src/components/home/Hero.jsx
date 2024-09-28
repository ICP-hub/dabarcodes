import React from "react";
import { useModal } from "../../context/ModalContext";

const Hero = () => {
  const { openConnectWalletModal } = useModal();

  return (
    <section id="home" className="bg-white top-[87px] ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="roboto-bold text-3xl sm:text-[61px] font-extrabold  sm:leading-[73.2px] leading-8 text-left">
            Unlock Amazing <span className="text-[#0D90C1]">Promotions</span>{" "}
            with daBarcodes
          </h1>

          <p className="roboto-regular max-w-2xl mb-6 mt-6 text-black lg:mb-8 md:text-xl text-base leading-[24px] text-left">
            Unlock access to exclusive promotions and unbeatable savings with
            daBarcodes. Experience a new level of shopping convenience and
            value.
          </p>

          <a
            onClick={openConnectWalletModal}
            className="w-[152px] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#E7F8FE] border border-gray-300 rounded-lg btn  cursor-pointer  "
          >
            Join Now
          </a>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/home.png" alt="home" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
