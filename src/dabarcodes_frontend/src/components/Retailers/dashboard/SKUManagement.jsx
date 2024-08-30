import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const columns = [
  { label: "SKU Name", accessor: "SKUName" },
  { label: "Category", accessor: "Category" },
  { label: "Brand Name", accessor: "BrandName" },
  { label: "Supplier Name", accessor: "SupplierName" },
  { label: "Stock Status", accessor: "StockStatus" },
];
const data = [
  {
    SKUName: "Organic Quinoa Grains 500g",
    Category: "Grains & Cereals",
    BrandName: "Nature's Harvest",
    SupplierName: "Green Fields Organic Supplies",
    StockStatus: "In Stock",
  },
  {
    SKUName: "Organic Quinoa Grains 500g",
    Category: "Grains & Cereals",
    BrandName: "Nature's Harvest",
    SupplierName: "Green Fields Organic Supplies",
    StockStatus: "Out of Stock",
  },
  {
    SKUName: "Organic Quinoa Grains 500g",
    Category: "Grains & Cereals",
    BrandName: "Nature's Harvest",
    SupplierName: "Green Fields Organic Supplies",
    StockStatus: "20 items left",
  },
];

const SKUManagement = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-16">Dashboard</h1>

      <DataTable columns={columns} data={data} />
    </>
  );
};

export default SKUManagement;

const DataTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sort Functionality
  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Handle Sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Handle Search Filtering
  const filteredData = sortedData.filter((item) =>
    columns.some((column) =>
      item[column.accessor]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Page Change
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* Search Bar */}
      <div className="flex mx-8 mt-8 md:mt-0 justify-center md:justify-end items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 pl-8 rounded-lg border-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CiSearch
            size={24}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div className="border rounded-lg">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full shadow-md rounded">
            <thead className="bg-[#F9F9FD]">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="p-4 border-b text-[#2A2A2A] text-left cursor-pointer"
                    onClick={() => handleSort(column.accessor)}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}{" "}
                      {sortConfig.key === column.accessor &&
                        (sortConfig.direction === "ascending" ? (
                          <FaArrowUp size={14} className="mt-1" />
                        ) : (
                          <FaArrowDown size={14} className="mt-1" />
                        ))}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {columns.map((column) => {
                    let cellBackground = "";
                    let textColor = "";
                    let cellContent = item[column.accessor];

                    if (column.accessor === "StockStatus") {
                      if (cellContent === "In Stock") {
                        cellBackground = "#EAFDEE";
                        textColor = "#147129";
                      } else if (cellContent === "Out of Stock") {
                        cellBackground = "#FFEBE6";
                        textColor = "#B42700";
                      } else if (cellContent.includes("items left")) {
                        cellBackground = "#FFFAE4";
                        textColor = "#716423";
                      }
                    }

                    return (
                      <td
                        key={column.accessor}
                        className="px-2 py-4 border-b"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <span
                          className={`inline-block px-2 py-1 rounded-full ${
                            cellBackground ? "" : ""
                          }`}
                          style={{
                            backgroundColor: cellBackground,
                            color: textColor,
                          }}
                        >
                          {item[column.accessor]}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex p-4 justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border p-2 cursor-pointer  border-[#E0E0E0] disabled:opacity-50 rounded-lg disabled:cursor-not-allowed "
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border p-2 cursor-pointer rounded-lg border-[#E0E0E0] disabled:opacity-50 disabled:cursor-not-allowed "
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
