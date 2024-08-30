import { promotionsData } from "./giftCarddata";
import Card from "./GiftCard";
import Scroll_Promotion from "../../reusable_components/Scroll_Promotion";

const Upcoming = () => {
  return (
    <Scroll_Promotion
      isTrue={true}
      header={"Save the Date: Upcoming Discounts"}
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
    </Scroll_Promotion>
  );
};

export default Upcoming;
