import { promotionsData } from "./giftCarddata";
import Card from "./GiftCard";
import Scroll_Promotion from "../../reusable_components/Scroll_Promotion";

const Today_Top_Promotion = () => {
  return (
    <Scroll_Promotion isTrue={true} header={"Today’s Top Coupon Promotions"}>
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

export default Today_Top_Promotion;
