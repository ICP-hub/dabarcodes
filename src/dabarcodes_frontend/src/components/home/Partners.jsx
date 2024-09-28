import React from "react";

const logos = [
  {
    src: "51.png",
    alt: "Transistor",
  },
  {
    src: "52.png",
    alt: "Reform",
  },
  {
    src: "53.png",
    alt: "Tuple",
  },
  {
    src: "54.png",
    alt: "SavvyCal",
  },
  {
    src: "55.png",
    alt: "Statamic",
  },
  {
    src: "56.png",
    alt: "Laravel",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="bg-white text-black pb-4">
      <h2 className="text-center md:text-3xl text-2xl roboto-bold mb-2 leading-8">
        Our Partners
      </h2>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 ">
        {/** Flexbox for large screens */}
        <div className="hidden sm:flex animate-slide-left-infinite group-hover:animation-pause  w-max">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="mx-4 mb-4 h-52 ">
              <img className="h-full" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        {/** Grid for small screens */}
        <div className="grid grid-cols-3 gap-4   sm:hidden">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 mb-4 ">
              <img className="w-16 h-24" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
