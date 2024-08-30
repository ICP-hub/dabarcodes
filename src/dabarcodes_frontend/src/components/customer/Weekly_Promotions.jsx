import React, { useEffect, useRef, useState } from "react";
import { promotionsData } from "./giftCarddata";
import Card from "./GiftCard";

const Weekly_Promotions = () => {
  const scrollContainerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const calculateVisibleCards = () => {
      if (container) {
        const containerWidth = container.offsetWidth;
        const cardWidth = 300;
        const spacing = 16;
        const visible = Math.floor(containerWidth / (cardWidth + spacing));
        setVisibleCards(visible > 0 ? visible : 1);
      }
    };

    calculateVisibleCards();
    window.addEventListener("resize", calculateVisibleCards);

    let interval = setInterval(() => {
      if (container) {
        setCurrentIndex((prevIndex) => {
          const totalCards = promotionsData.length;
          const newIndex = (prevIndex + visibleCards) % totalCards;

          container.scrollTo({
            left: newIndex * (300 + 16), // Move to the next set of cards
            behavior: "smooth",
          });

          return newIndex;
        });
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", calculateVisibleCards);
    };
  }, [visibleCards]);

  return (
    <div className="bg-[#E7F8FE] h-[409px] rounded-[10px] lg:mx-14 lg:my-16 md:m-12 my-8 mx-2">
      <p className="text-[#000000] md:text-[31px] text-center py-10 font-serif font-semibold">
        Top Promotions of the Week
      </p>
      <div className="overflow-hidden relative">
        <div
          ref={scrollContainerRef}
          className="flex md:ml-4 ml-1  space-x-4 whitespace-nowrap overflow-hidden"
        >
          {promotionsData.map((promo, index) => (
            <Card
              key={index}
              title={promo.title}
              subtitle={promo.subtitle}
              expiration={promo.expiration}
              icon={promo.icon}
              bgColor={promo.bgColor}
              isExpiringToday={promo.isExpiringToday}
            />
          ))}
          {/*  */}
          {promotionsData.map((promo, index) => (
            <Card
              key={`duplicate-${index}`}
              title={promo.title}
              subtitle={promo.subtitle}
              expiration={promo.expiration}
              icon={promo.icon}
              bgColor={promo.bgColor}
              isExpiringToday={promo.isExpiringToday}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Weekly_Promotions;

//
