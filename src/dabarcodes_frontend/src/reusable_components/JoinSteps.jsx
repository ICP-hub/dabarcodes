import React from "react";

const JoinSteps = ({ bgColor, steps }) => {
  return (
    <div className={`mx-auto ${bgColor} mt-4 sm:mt-8`}>
      <div className="text-center mb-12">
        <h2 className="font-butler text-4xl font-extrabold leading-[37.2px]">
          {steps.header}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-around relative">
        {/* Iterate over the steps */}
        {steps.items.map((step, index) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div
              className={`flex flex-col items-center w-full md:w-72 h-52 p-4 space-y-4 ${
                index < steps.items.length - 1 ? "mb-8 md:mb-0" : ""
              }`}
            >
              <img src={step.image} alt={step.alt} />
              <h6 className="font-butler text-xl font-medium leading-6 text-center">
                {step.title}
              </h6>
              <p className="font-roboto text-sm font-normal leading-5 text-center text-gray-600">
                {step.description}
              </p>
            </div>
            {/* Arrow */}
            {index < steps.items.length - 1 && (
              <div className="hidden md:block relative w-48 h-0.5 mb-8 md:mb-0">
                <img
                  src={steps.arrows[index]}
                  alt="arrow"
                  className={`absolute top-14 ${
                    index % 2 === 0
                      ? "left-1/2 transform -translate-x-1/2"
                      : "right-1/2 transform translate-x-1/2"
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default JoinSteps;
