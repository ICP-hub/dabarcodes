import { useModal } from "../../context/ModalContext";
import Ribbon from "../../reusable_components/Ribbon";

const Card = ({
  title,
  subtitle,
  expiration,
  icon: Icon,
  bgColor,
  isExpiringToday,
}) => {
  const { openCoupan } = useModal();

  return (
    <div
      onClick={openCoupan}
      className={`flex-none relative md:w-[412px] w-[300px]  shadow-lg rounded-xl border  overflow-hidde cursor-pointer ${bgColor}`}
    >
      <div className="p-6 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-[31px] font-semibold">{title}</h2>
          <div className="text-3xl">
            <Icon className="w-12 h-12 " />
          </div>
        </div>
        <p className="text-sm mt-2">{subtitle}</p>
        <p className="text-sm mt-4">{expiration}</p>
      </div>
      {isExpiringToday && (
        <Ribbon topOffset="120px" foldSize="12px">
          Expiring Today
        </Ribbon>
      )}

      <div className="bg-white rounded-b-lg p-4 flex justify-between items-center">
        <p className="text-red-500 text-sm">30 sec left</p>
        <button className="bg-[#0D90C1] text-white py-2 px-4 rounded-[10px]">
          Click here to Claim
        </button>
      </div>
    </div>
  );
};

export default Card;
