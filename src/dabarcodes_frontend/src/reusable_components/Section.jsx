import React from "react";

const Section = ({
  bgColor,
  header,
  items,
  mainImage,
  mainImagePosition,
  mainImageWidth,
  mainImageHeight,
}) => {
  // Default width and height values
  const defaultWidth = "w-full";
  const defaultHeight = "h-auto";

  // Determine class names based on props
  const widthClass = mainImageWidth
    ? `lg:${mainImageWidth} xl:${mainImageWidth}`
    : defaultWidth;
  const heightClass = mainImageHeight
    ? `lg:${mainImageHeight} xl:${mainImageHeight}`
    : defaultHeight;

  return (
    <div className={`container p-4 md:p-16 ${bgColor}`}>
      <div className="text-center mb-14">
        <h1 className="hidden md:block text-2xl md:text-3xl roboto-bold  text-gray-800">
          {header}
        </h1>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
          mainImagePosition === "right" ? "md:grid-cols-2" : "md:grid-cols-2"
        }`}
      >
        {/* Left Side */}
        <div
          className={`flex flex-col ${
            mainImagePosition === "right" ? "order-2" : "order-1"
          } lg:flex-row space-y-8  lg:space-y-0 lg:space-x-8 `}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:items-center p-6 rounded-lg shadow-md md:border-none border lg:shadow-none"
            >
              <div className="flex items-center justify-center w-16 h-16 md:mb-4">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="md:w-full md:h-full w-8 h-8 object-contain"
                />
              </div>
              <h2 className="md:text-xl text-base roboto-medium  text-gray-800 mb-2 md:text-center">
                {item.title}
              </h2>
              <p className="text-gray-600 roboto-regular md:text-base  md:text-center text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div
          className={` md:block flex-1 ${
            mainImagePosition === "right" ? "order-1" : "order-2"
          }`}
        >
          <div
            className={`w-full  p-6 bg-[#B5E8FB] rounded-lg shadow-md ${widthClass} ${heightClass}`}
          >
            <img
              src={mainImage}
              alt="Main Illustration"
              className="w-full  h-auto object-cover mx-auto"
            />
          </div>
          <h1 className="text-2xl md:hidden my-8 text-center md:text-3xl roboto-bold  text-gray-800">
            {header}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;
