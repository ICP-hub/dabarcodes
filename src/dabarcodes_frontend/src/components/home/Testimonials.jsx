import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCount, setShowCount] = useState(2);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      date: "May 8, 2020",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      image: "/test1.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "June 12, 2020",
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      details:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/test2.png",
    },
    {
      id: 3,
      name: "James Doe",
      date: "July 22, 2020",
      title: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      details:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:
        "https://s3-alpha-sig.figma.com/img/586a/e06d/df3712aadbd973cd93c679fe36d976fa?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XehWiPc6~aTEiv1pU01dXD3rDDrLOm~osd~dxX5bF2LWx5PH2~BhturPeAE-zPUWpZrn65dvG9~G56FrfyWLTIxStXjua5mXh3bGY3r91friWnpG2Sk7EAz51y3bxKb53LRHFItCSlXbP5DdoIuvu6v~rIJhnywt651AoglBM4gngkBwvU0cqzuqfUMT0zFCn1Ejj3Bxyp~RXoctQsmIHV8Hyj3lYssaf0T3URXXkiXItGAxK34MBa-ovJEr9omnIVqfpl56zPqjfHJQs~~2ZDg6sPnMersulZOSCzHvpmXLib1thkImfObbsRmT9~sWanlY4TZnWSqiA33sSqq0Sw__",
    },
  ];

  useEffect(() => {
    const debounce = (func, delay) => {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const handleResize = debounce(() => {
      setShowCount(window.innerWidth < 800 ? 1 : 2);
    }, 100);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - showCount ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div id="testimonials" className="relative max-w-6xl mx-auto mb-24">
      <h2 className="text-center md:text-3xl  text-2xl roboto-bold mb-8">
        Testimonials
      </h2>
      <div className="flex space-x-8 overflow-hidden mx-4 md:mx-0">
        {testimonials
          .slice(currentIndex, currentIndex + showCount)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg border p-8 flex space-x-6 w-full  transform transition-transform duration-700 ease-in-out sm:flex-row flex-col  items-center "
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="sm:w-48 sm:h-56 object-cover sm:rounded-lg w-24 h-24 rounded-full "
              />
              <div className="mt-2">
                <p className="text-sm text-[#525252] roboto-regular">
                  {testimonial.date}
                </p>
                <h3 className="text-base roboto-medium text-[#646464]">
                  {testimonial.title}
                </h3>
                <p className="text-[#646464] text-sm  roboto-regular  mt-2">
                  {testimonial.details}
                </p>
                <p className="text-[#646464] text-sm  roboto-medium sm:mt-4">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center mt-4 sm:mt-16 relative">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`${
            currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : ""
          }`}
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="flex justify-center mx-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-2 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= testimonials.length - showCount}
          className={`${
            currentIndex >= testimonials.length - showCount
              ? "text-gray-400 cursor-not-allowed"
              : ""
          }`}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
