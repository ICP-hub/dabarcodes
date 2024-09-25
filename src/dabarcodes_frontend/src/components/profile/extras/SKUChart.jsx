import React from "react";
import DoughnutChart from "../../../reusable_components/DoughnutChart";

const SKUChart = () => {
  const data = [1, 3, 4, 2, 3]; // Example data
  const labels = [
    " Frozen Food",
    "Shelf Stable Food",

    "Fruits and Vegetables",

    "Fresh Meat",
    "Dairy Products ",
  ];
  const colors = [
    { background: "#F1E7FE", border: "#F1E7FE" }, // Color for "Frozen Food"
    { background: "#F1E3D6", border: "#F1E3D6" }, // Color for "Shelf Stable Food"
    { background: "#D5F7C5", border: "#D5F7C5" }, // Color for "Fruits and Vegetables"
    { background: "#FED3D2", border: "#FED3D2" }, // Color for "Fresh Meat"
    { background: "#F7F4EC", border: "#F7F4EC" }, // Color for "Dairy Products"
  ];
  const centerText = {
    label: "Total SKU", // Text to show above the value
    value: data.reduce((acc, cur) => acc + cur, 0), // Text to show below the label
  };
  return (
    <>
      <div className="flex flex-col items-center  m-8  sm:flex-row   mb-4">
        <DoughnutChart
          data={data}
          labels={labels}
          colors={colors}
          centerText={centerText}
        />

        <div className="ml-4 mt-4">
          <ul>
            {labels.map((label, index) => (
              <li key={index} className="flex  items-center">
                <span
                  className="inline-block w-3 h-3 rounded-full mr-4 "
                  style={{ backgroundColor: colors[index].background }}
                ></span>
                {label}: {data[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SKUChart;
