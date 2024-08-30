import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const DaBarcodesInfo = () => {
  return (
    <div
      id="about"
      className="bg-blue-100 py-12 px-6 flex justify-center items-center"
    >
      <div className="flex flex-col gap-24 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center">
            What is DaBarcodes
          </h1>
          <p className="text-base font-normal text-gray-600 text-center">
            daBarcodes bridges the gap between customers, suppliers, and
            retailers through a unique promotional platform. Whether you're here
            to save, promote, or analyze, daBarcodes offers the perfect
            solution.
          </p>
        </div>

        {/* Boxes Section */}
        <div className="flex gap-24 flex-wrap justify-center">
          {/* Small Box 1 */}
          <div className="w-full max-w-xs bg-blue-200 rounded-lg flex flex-col items-center justify-center p-4">
            <p className="text-lg font-bold text-gray-800 text-center mb-4">
              Start Your Savings <br /> Journey
            </p>
            <img
              src="/image/image 50.png"
              alt="image"
              className="w-full h-auto mb-4"
            />
            <div className="flex items-center">
              <p className="text-base font-semibold text-gray-800">
                Join as customer
              </p>
              <FaLongArrowAltRight className="ml-2 text-blue-500" />
            </div>
          </div>

          {/* Small Box 2 */}
          <div className="w-full max-w-xs bg-blue-200 rounded-lg flex flex-col items-center justify-center p-4">
            <p className="text-lg font-bold text-gray-800 text-center mb-4">
              Unlock Customer <br /> Insights
            </p>
            <img
              src="/image/image 51.png"
              alt="image"
              className="w-full h-auto mb-4"
            />
            <div className="flex items-center">
              <p className="text-base font-semibold text-gray-800">
                Join as retailer
              </p>
              <FaLongArrowAltRight className="ml-2 text-blue-500" />
            </div>
          </div>

          {/* Small Box 3 */}
          <div className="w-full max-w-xs bg-blue-200 rounded-lg flex flex-col items-center justify-center p-4">
            <p className="text-lg font-bold text-gray-800 text-center mb-4">
              Promote Your <br /> Products Effortlessly
            </p>
            <img
              src="/image/image 52.png"
              alt="image"
              className="w-full h-auto mb-4"
            />
            <div className="flex items-center">
              <p className="text-base font-semibold text-gray-800">
                Join as supplier
              </p>
              <FaLongArrowAltRight className="ml-2 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaBarcodesInfo;
