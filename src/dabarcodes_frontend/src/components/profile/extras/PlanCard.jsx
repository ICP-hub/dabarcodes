const PlanCard = ({ planData }) => {
  return (
    <div className="border-2 shadow-lg rounded-md py-4 pl-4  flex flex-col md:flex-row justify-between items-start  bg-white w-full max-w-md md:max-w-lg lg:max-w-xl">
      <div className="mb-4 md:mb-0">
        <h3 className="text-base roboto-bold mb-2">Your Plan</h3>
        <div className="text-sm">
          <p className="roboto-regular text-[#646464]">
            Plan Type:{" "}
            <span className="text-[#171717]">{planData.planType}</span>
          </p>
          <p className="roboto-regular text-[#646464]">
            Status: <span className="text-[#171717]">{planData.status}</span>
          </p>
          <p className="roboto-regular text-[#646464]">
            Next Renewal Date:{" "}
            <span className="text-[#171717]">{planData.renewalDate}</span>
          </p>
          <p className="roboto-regular text-[#646464]">
            Utility Token Available:{" "}
            <span className="text-[#171717]">{planData.tokensAvailable}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#DBF4FD] text-black text-sm px-4 py-2 rounded-s-full roboto-medium md:ml-4">
        Member Since: {planData.memberSince}
      </div>
    </div>
  );
};

export default PlanCard;
