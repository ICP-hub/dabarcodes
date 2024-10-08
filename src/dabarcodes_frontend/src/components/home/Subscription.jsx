import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
const Subscription = () => {
  return (
    <div
      id="purchase"
      className="flex flex-row sm:ml-[62px]   bg-[#E7F8FE] border-[#055C9A] border-[0.86px] sm:rounded-[231.53px_0_0_231.53px] opacity-52 sm:mb-40 mb-20"
    >
      {/* Main Image Section */}
      <div className="lg:flex hidden xl:h-[481px]  lg:h-[400px] justify-center xl:mt-[-37px] ">
        <img
          src="/subscriptions.png"
          alt="Subscription"
          className="object-cover xl:w-[711px] lg:w-[600px]    brightness-100"
        />
      </div>

      <main className="lg:pl-0 md:pl-52 sm:pl-36 pl-8 pb-4 ">
        {/* Header and Details Section */}
        <div className=" mb-8">
          <span className="text-2xl md:text-3xl  roboto-bold  mb-4 block mt-10">
            Join the Subscription
          </span>
          <p className="md:text-base text-sm mb-6 roboto-regular">
            Unlock exclusive access to gain unparalleled benefits designed to
            enhance <br /> your shopping experience:
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <div className="xl:flex flex-wrap   gap-20 space-y-4">
            <div className="flex items-center space-x-4 ">
              <RiDiscountPercentFill size={40} color="#B72322" />
              <p className="roboto-medium md:text-xl text-base">
                Exclusive Deals
              </p>
            </div>
            <div className="flex items-center space-x-4 ">
              <FaHeart size={38} color="#B72322" />
              <p className="roboto-medium md:text-xl text-base">
                Personalized Offers
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <IoBagHandle size={40} color="#B72322" />
            <p className="roboto-medium md:text-xl text-base">
              Seamless Shopping
            </p>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className="md:pb-8 xl:pb-0">
          <Link
            to="/purchase"
            className="btn text-[#E7F8FE] py-2 px-6 rounded-md  roboto-medium text-base"
          >
            Subscribe Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Subscription;
