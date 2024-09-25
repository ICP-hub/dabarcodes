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
    <section id="partners" className="bg-white text-black  pb-4">
      <h2 className="text-center text-4xl mb-2 font-bold italic leading-8">
        Our Parntenrs
      </h2>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,black_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              className="mx-4 inline  h-52"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
