import React from "react";

const datas = [
  {
    title: "Total Revenue",
    amount: "$2,420",
    percentage: "20%",
  },
  {
    title: "Total Expenses",
    amount: "$1,320",
    percentage: "-10%",
  },
  {
    title: "Net Profit",
    amount: "$1,100",
    percentage: "15%",
  },
];
// table1
const data1 = Array.from({ length: 100 }, (_, index) => ({
  sku: `SKU-${index + 1}`,
  brand: `Brand ${index % 10}`,
  category: `Category ${index % 5}`,
  promotion: `Promo ${index % 20}`,
}));

const columns1 = [
  { Header: "SKU Name", accessor: "sku" },
  { Header: "Brand Name", accessor: "brand" },
  { Header: "SKU Category", accessor: "category" },
  { Header: "Associated Promotion", accessor: "promotion" },
];

//

//
const data2 = Array.from({ length: 100 }, (_, index) => ({
  skuname: `SKU-${index + 1}`,
  status: index % 2 === 0 ? "In Stock" : "Out of Stock",
}));

const columns2 = [
  { Header: "SKU Name", accessor: "skuname" },
  {
    Header: "Status",
    accessor: "status",
    render: (item) => (
      <span
        className={`px-2 py-1 rounded-full ${
          item.status === "In Stock"
            ? "text-[#147129] bg-[#EAFDEE]"
            : "text-[#B42700] bg-[#FFEBE6]"
        }`}
      >
        {item.status}
      </span>
    ),
  },
];

//
const barChartData = [
  { metric: 100, promotionName: "20% Off Snack Bars" },
  { metric: 1500, promotionName: "$5 Off 2 or More Packs" },
  { metric: 800, promotionName: "10% Off Organic Pasta" },
  { metric: 2500, promotionName: "$10 off on Fruits" },
];
const maxMetric = Math.max(...barChartData.map((item) => item.metric));

//

//
const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-16">Dashboard</h1>

      <div className="  grid xl:gap-32  xl:grid-cols-4  lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:mx-16  ">
        {datas.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            amount={item.amount}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="md:flex lg:mx-16 gap-4">
        <Table
          widthSm="w-full"
          data={data1}
          columns={columns1}
          itemsPerPage={10}
          widthMd="md:w-[420px] lg:w-[600px] xl:w-[1000px] "
          title={"SKU from Suppliers"}
        />
        <Table
          data={data2}
          columns={columns2}
          itemsPerPage={10}
          widthMd="md:w-[250px]"
          widthSm="w-full"
          title={"MY SKUs"}
        />
      </div>
      <div className="md:flex  my-8  lg:mx-16 ">
        <BarChart
          title="Top Performing Promotion"
          data={barChartData}
          maxMetric={maxMetric}
        />
        <Leaderboard />
      </div>
      <div className="flex gap-4 lg:mx-16">
        <Button text="Upload SKUs CSV" />
        <Button text="New SKUs " />
      </div>
    </>
  );
};

export default Dashboard;

import { IoMdMore } from "react-icons/io";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";
const Card = ({ title, amount, percentage }) => {
  const isPositive = parseFloat(percentage) >= 0;
  return (
    <div className="shadow-xl mt-8 flex flex-col justify-center rounded-lg bg-white border w-[322px] h-[127px] p-4">
      <div className="flex justify-between text-[#57595B]">
        <p>{title}</p>
        <IoMdMore size={28} className="" />
      </div>
      <div className="flex justify-between">
        <p className="text-[31px]">{amount}</p>
        <div
          className={`bg-[#EAFDEE] rounded-xl flex gap-1 justify-center items-center mt-4 p-2 w-[69px] h-[24px]`}
        >
          {isPositive ? (
            <FaArrowUp size={12} className="text-[#147129]" />
          ) : (
            <FaArrowDown size={12} className="text-[#D43F40]" />
          )}
          <p
            className={`text-sm ${
              isPositive ? "text-[#147129]" : "text-[#D43F40]"
            }`}
          >
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

//
import { useState } from "react";

const Table = ({
  data,
  columns,
  itemsPerPage = 10,
  widthMd = "md:w-[600px]",
  widthSm = "w-[400px]",
  title,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={`shadow-xl mt-8 flex flex-col justify-center rounded-lg border ${widthMd} ${widthSm}`}
    >
      <div className="relative overflow-x-auto">
        <div className="flex justify-between px-4 py-2 text-[#57595B] text-sm">
          <p>{title}</p>
          <IoMdMore size={24} />
        </div>
        <div className="sticky top-0 bg-white border-b z-10">
          <table className="min-w-full bg-white">
            <thead className="sticky top-0 z-20">
              <tr className="bg-gray-100 border-b">
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="px-4 py-2 border-b text-left"
                  >
                    {column.Header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="border-b text-sm">
                  {columns.map((column) => (
                    <td
                      key={column.accessor}
                      className={`px-4 py-2 ${column.getCellClass?.(item)}`}
                    >
                      {column.render
                        ? column.render(item)
                        : item[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-l bg-gray-200 disabled:cursor-not-allowed "
        >
          Previous
        </button>

        <button
          onClick={() => handlePageChange(currentPage)}
          className="px-4 py-2 border-t border-b bg-white"
        >
          {currentPage}
        </button>

        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-r bg-gray-200 disabled:cursor-not-allowed "
        >
          Next
        </button>
      </div>
    </div>
  );
};

//

// BarChart Component
const BarChart = ({ title, data, maxMetric }) => {
  return (
    <div className="shadow-custom p-4 rounded-lg bg-white border-2 border-gray-250 w-full md:max-w-md">
      {/* Title */}
      <div className="flex justify-between  py-2 text-[#57595B] text-sm font-semibold">
        <p>{title}</p>
        <IoMdMore size={24} />
      </div>

      {/* Bar Chart Rows */}
      <div>
        {data.map((item, index) => (
          <div key={index} className="flex   items-center  mb-3">
            {/* Engagement Metric */}
            <div className=" w-12 text-sm font-semibold text-blue-700">
              {item.metric}
            </div>

            {/* Bar */}
            <div className="w-[200px] h-4 ml-2 rounded-full  bg-[#DBF4FD] relative ">
              <div
                className="h-full   rounded-full bg-[#0D90C1]"
                style={{ width: `${(item.metric / maxMetric) * 100}%` }}
              ></div>
            </div>

            {/* Promotion Name */}
            <div className=" ml-4 text-sm text-gray-700 ">
              {item.promotionName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//

//

const leaderboardData = [
  { name: "Farina Del Rio", amount: "$15,000" },
  { name: "Alex Dublin", amount: "$15,000" },
  { name: "Daniel Lors", amount: "$15,000" },
  { name: "Sam Lee", amount: "$14,000" },
  { name: "Chris James", amount: "$13,000" },
  { name: "Patricia Yew", amount: "$12,000" },
  { name: "Linda Green", amount: "$11,000" },
  { name: "Michael Tan", amount: "$10,000" },
  { name: "John Doe", amount: "$9,000" },
  { name: "Jane Smith", amount: "$8,000" },
  // Add more data as needed
];
import { FaEllipsisV, FaArrowRight } from "react-icons/fa";

//
const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // Calculate the number of pages
  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  // Get the current page data
  const currentData = leaderboardData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" md:mx-4 md:mt-0 mt-4 border-2 border-[#ECECEE] p-4 rounded-lg">
      <div className="flex text-[#57595B]  justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Leaderboard</h2>
        <FaEllipsisV className="text-[#57595B] " />
      </div>
      <ul className="bg-">
        {currentData.map((item, index) => (
          <li
            key={index}
            className="bg-white p-3 mb-2 rounded-lg flex justify-between items-center  border-2  gap-8 shadow-custom"
          >
            <span className="text-[#10B4F1] text-[20px] font-extrabold">
              {currentPage * itemsPerPage + index + 1}
            </span>
            <span className="text-black font-normal  ">{item.name}</span>
            <span className="text-gray-800">{item.amount}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="text-[#10B4F1] flex items-center"
          >
            <FaArrowLeft className="mr-1" /> Previous
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={nextPage}
            className="text-[#10B4F1] flex items-center ml-auto"
          >
            Next <FaArrowRight className="ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

const Button = ({ text = "Button" }) => {
  return (
    <>
      <div className=" bg-white border-3 shadow-custom border-[#ECECEE] flex justify-center rounded-lg w-fit h-[65px]">
        <button className="px-4">{text}</button>
      </div>
    </>
  );
};
