import React from "react";

const logos = [
  {
    src: "https://s3-alpha-sig.figma.com/img/bb72/7f31/79a4e3f3913908033b22f0b183fb8f81?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cV7DdHqWD8CSeKqG-tSSb2yydI--61E0kSnj4ckwnfh4aSFAurXYbnGueHKKSvglcm3UnpFJ4WRhahyeNQjvfpq~MX03Uu0jTFP~42eTbXmq--mQo1v~yS0JeJjN21HNBg3Y56lnn02wOXNMx5cg2-iQkWMThDMhOI4hophnUgGCR~So~U5ESc9NSlK~jg1HebcnjIAdtDK1PgJNXLKssaqxMYHt4EVDfVxA79y3aKvapD4NHv-gOYfrMsoyOLpvjKcRklYw8CGJp0sQgoaeI2VJ-N6CeWHuG5zyn74SiS~3ObWECpmKQfDk-VGLVZ9wGkRs8VLI12uVcfcmPeMIog__",
    alt: "Transistor",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/f36e/18b4/e8efc882578e624a985ef6bd5548e95a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MgyA2v1lqCkjUynUrovV3mB3sm29bbfYMk8JZ7b191PmVaF2G~WW6FQaEf9A6kNAO33URRJHMw5z9dinY5w1ChsJRmNlbOnhW3utCW1eRCKqUiisT5lTxsPYMYlfmQQS-p0OehFvezXq9EtK1yUAgyMsR5-Uee3K838A18GR8ARCwSyg9vMBjn1Rbx4GODDzu0cO1nRdieEcgskYnPkWFVhzxuOi79FVLLajMIowqTR~Zun7qRpjDc7r1B8QkMzhRNkmAc6eB19Fzn6ptxIGpJG34OSYpODjZ3aCiQTsC~LPlXS0DaIPo5syWgLUS43xUQhT9NSe8UzOakhlueBPpA__",
    alt: "Reform",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e3fe/fc73/f8d2527b302fbe47f3b51a27648cd505?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVujQs7jbUxTqSwZiAca3-m8DudCeGQ~xC27-pUmrgO8IXFNpLe8B-nsPxWyGQMyoIbZdztv9FuPGeJ-Ces-134hsp-etPq8zsoBfK8jZ~ac2wZ8l6y3NOMjbQiMZ70-gd9dkKdRg6pvCsaxoreBxfnRb~qaJGdp93YwKBHCRFk8k1eCcfGvZs89h9RT4r37Ns7fQ4AOiY~pqf7DM-dsppDuuaIp~CUOCLHfgmE20pqYzP4bJu14ULdVuiQl9NVwqbJ5PDso9D39BD37o~zbFjHtPm84u9zNCnTf1auTS~lKJCJhtcXq1pXcgJnnRZANicPjMRHzes8aSqIeaUfQIw__",
    alt: "Tuple",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bbc2/9d72/a71ce906e4d6f9813c50b6207d734c97?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RdQZ8BzBv6dZzWne5Awm9BPjfHnArF3iBdnwvmLhxHupEaX2cujUJgryjPGldsxLZLRzpzO5Ap9klrRvjyWjcERlHMpvbUzY2GGKd-UKEL-3i8-lwefGOzwjj4uJ-PQKReSSZr24udL6bF39MhrBuoscaKiINrF3sTqE46w0ipgzkEd~gXgur6UvloueSkWyDrrj7x1jeL7rC1uHJEKnUGOUfN4isoZfmvK8dJeMJXVceupKyLV5Yt9tHEzLAqcklymEfAz8dXbkiIxHLHQW--JnUSwuGJPmQ4t5SlQZ7muO3W1Q6ksEcVMezrgsj32xSdFrFgMlexPc7TEI111OpA__",
    alt: "SavvyCal",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/1f09/166a/7a85d8de419cf8d530a62fe548cc1912?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUmLND4dfhTiW4yZJf-m9zZZ3F-L4batIbzKcaI7IAYFTLD7xOrTDQp1CmCWmpdLID6PBkZafwoorAPhdrG5IV~1p4nIz-6jXuIdV6dXAkaZdjVhVIpLyJXdORqh9lapkxSItpmWBULhclJwK4~WzAJHGYAJDi3TAHRlJ~MEJx63Q0X4eZJpxB-BJFe8rFswVownEzduAfjKLJvpv1ZoC5E4XMPQT75jTZcyT6MCkxKTOjhkkzWDOmblmmK~bgWB2TXxwZhwIzubTeK8DCSKRk4qzfcw6gWqG1Beoz2hImGOfhjvUkYmy76-LYg1j7h1---p8VFXGhrkR5VjpNcPYg__",
    alt: "Statamic",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/56d3/5cdc/fa17cd46edab69ef67855311fbe2b469?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MS4fmnpzLFUjLit5W1I9X9NgTIxTaH1qJX3actbFkcna5B5s6YmGed~nHA3rbAErfr1xTjZVzJ0pLtm1SlN3K3pCUvgdUOSc7GQaXumbFnhvLG57WmW91vY5OAMHET6ei40yOjVwN2VQIdWO9zvDH8c-YxOOyuLTtG2n2D8tOen0in9OIdzxjg1qWVD8YaOe7teZG4pylONDXE2VXgiqrUETehlckMtW8trWv~x4VvLwAcdmPg97vA9mBNXvYN1Ssm1I129iAGufP88X2spjklunKdDHDRwY-4ZRlxeG1-VMqm1IhVpqB0Ki1RthTmcqLvtfNf~mc~a2kaDGTjPT2w__",
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
