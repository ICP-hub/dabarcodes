import React from "react";
import DoughnutChart from "../../reusable_components/DoughnutChart";
import Product from "../../reusable_components/Product";

const MyLinkedSKUs = () => {
  const data = [1, 3, 4, 2, 3]; // Example data
  const labels = [
    " Frozen Food",
    "Shelf Stable Food",

    "Fruits and Vegetables",

    "Fresh Meat",
    "Dairy Products ",
  ]; // Example labels
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

  const products = generateItems(data, labels, colors);
  console.log(products);

  return (
    <>
      <h2 className="text-xl text-center md:text-left m-8 font-bold mb-2">
        My Linked SKUs
      </h2>
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
      <div>
        <Product isLinked={true} data={products} />
      </div>
    </>
  );
};

export default MyLinkedSKUs;

const generateItems = (data, labels, colors) => {
  let items = [];
  const basePath = "/perOff";

  data.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      items.push({
        id: items.length + 1, // Ensure unique ID
        name: labels[index],
        bgColor: `bg-[${colors[index].background}] `,
        percentageOff: `${count * 10}%`, // Adjust percentageOff as needed
        img: `${basePath}/${index + 1}.png`, // Adjust image path as needed
        isExpiringToday: index % 3 === 0,
      });
    }
  });

  return shuffleArray(items);
};

const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
