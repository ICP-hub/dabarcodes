import DoughnutChart from "../../../reusable_components/DoughnutChart";

const UtilityTokens = () => {
  const data = [6, 3]; // Example data
  const labels = ["Used Tokens", "Unused Tokens"]; // Example labels
  const colors = [
    { background: "#0C87B5", border: "#0C87B5" }, // Color for "Used Tokens"
    { background: "#10B4F1", border: "#10B4F1" }, // Color for "Unused Tokens"
  ];
  const centerText = {
    label: "Total Tokens",
    value: data.reduce((acc, cur) => acc + cur, 0),
  };
  return (
    <>
      <div className="mb-4 flex lg:flex-row flex-col justify-center items-center lg:items-start lg:justify-between">
        {/* Circle Visualization */}
        <div className="flex md:flex-row flex-col items-center mb-4">
          <DoughnutChart
            data={data}
            labels={labels}
            colors={colors}
            centerText={centerText}
          />

          <div className="ml-4">
            <ul>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#07516C] mr-2"></span>
                Total utility tokens: {data[0] + data[1]}
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#0C87B5] mr-2"></span>
                Used utility tokens: {data[0]}
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#10B4F1] mr-2"></span>
                Unused utility tokens: {data[1]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityTokens;
