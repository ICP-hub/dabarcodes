const PlanCard = ({ planData }) => {
  return (
    <div className="border-2 shadow-lg rounded-md py-4 pl-4  flex flex-col md:flex-row justify-between items-start  bg-white w-full max-w-md md:max-w-lg lg:max-w-xl">
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-bold mb-2">Your Plan</h3>
        <div className="text-sm">
          <p className="font-semibold">
            Plan Type: <span className="font-normal">{planData.planType}</span>
          </p>
          <p className="font-semibold">
            Status: <span className="font-normal">{planData.status}</span>
          </p>
          <p className="font-semibold">
            Next Renewal Date:{" "}
            <span className="font-normal">{planData.renewalDate}</span>
          </p>
          <p className="font-semibold">
            Utility Token Available:{" "}
            <span className="font-normal">{planData.tokensAvailable}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#DBF4FD] text-black text-xs px-4 py-2 rounded-s-full md:ml-4">
        Member Since: {planData.memberSince}
      </div>
    </div>
  );
};

export default PlanCard;
