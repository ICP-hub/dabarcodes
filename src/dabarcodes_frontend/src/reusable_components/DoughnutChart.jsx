import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, labels, colors, centerText }) => {
  // Validate colors array length
  if (colors.length !== labels.length) {
    throw new Error(
      "The length of the colors array must match the length of the labels array."
    );
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Token Usage",
        data: data, // Dynamic data
        backgroundColor: colors.map((color) => color.background), // Map to background colors
        borderColor: colors.map((color) => color.border), // Map to border colors
        borderWidth: 1,
        borderRadius: 15,
        offset: 15,
        cutout: "85%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: true, // Enables tooltips
      },
    },
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        const { ctx, chartArea } = chart;
        const { width, height } = chartArea;
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.save();
        ctx.font = "bold 16px Arial"; // Font size for the label text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Draw center text
        ctx.fillStyle = "#000"; // Text color
        ctx.fillText(centerText.label, centerX, centerY - 20); // Label text position

        ctx.font = "bold 36px Arial"; // Font size for the total value
        ctx.fillText(centerText.value, centerX, centerY + 20); // Value text position
        ctx.restore();
      },
    },
  ];

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Doughnut data={chartData} options={options} plugins={plugins} />
    </div>
  );
};

export default DoughnutChart;

//

//
//
//
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const DoughnutChart = () => {
//   const usedTokens = 55; // Dynamic value for used tokens
//   const unusedTokens = 45;
//   const TotalTokens = usedTokens + unusedTokens;
//   const data = {
//     labels: ["Used Tokens", "Unused Tokens"],
//     datasets: [
//       {
//         label: "Token Usage",
//         data: [usedTokens, unusedTokens], // Dynamic data
//         backgroundColor: [
//           "#0C87B5", // Color for used tokens
//           "#10B4F1", // Color for unused tokens
//         ],
//         borderColor: [
//           "#0C87B5", // Border color for used tokens
//           "#10B4F1", // Border color for unused tokens
//         ],
//         borderWidth: 1,
//         borderRadius: 15,
//         offset: 15,
//         cutout: "75S%",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false, // Hides the legend
//       },
//       tooltip: {
//         enabled: true, // Disables tooltips
//       },
//     },
//   };

//   const plugins = [
//     {
//       beforeDraw: function (chart) {
//         const { ctx, chartArea, data } = chart;
//         const { width, height } = chartArea;
//         const centerX = width / 2;
//         const centerY = height / 2;

//         // Get the total value
//         const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);

//         ctx.save();
//         ctx.font = "bold 20px Arial"; // Font size for the text
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";

//         // Draw "Total Tokens" text
//         ctx.fillStyle = "#000"; // Text color
//         ctx.fillText("Total ", centerX, centerY - 32); // Adjust vertical position

//         // Draw the total value
//         ctx.font = "bold 36px Arial"; // Font size for the total value
//         ctx.fillText(total, centerX, centerY + 20); // Adjust vertical position
//         ctx.restore();
//       },
//     },
//   ];

//   return (
//     <div style={{ width: "200px", height: "200px" }}>
//       <Doughnut plugins={plugins} data={data} options={options} />
//     </div>
//   );
// };
