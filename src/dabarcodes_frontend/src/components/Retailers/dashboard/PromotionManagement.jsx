import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const columns = [
  { label: "Status", accessor: "status" },
  { label: "Promotion Name", accessor: "promotionName" },
  { label: "Start Date", accessor: "startDate" },
  { label: "End Date", accessor: "endDate" },
  { label: "Validity Status", accessor: "validityStatus" },
  { label: "Decision Status", accessor: "decisionStatus" },
];

const data = [
  {
    status: "New",
    promotionName: "Spring Sale",
    startDate: "2024, August 17",
    endDate: "2024, October 17",
    validityStatus: "Active",
    decisionStatus: "Approved",
  },
  {
    status: "New",
    promotionName: "Summer Discount",
    startDate: "2024, August 20",
    endDate: "2024, September 30",
    validityStatus: "Active",
    decisionStatus: "Pending",
  },
  {
    status: "New",
    promotionName: "Fall Clearance",
    startDate: "2024, September 1",
    endDate: "2024, November 1",
    validityStatus: "Active",
    decisionStatus: "Approved",
  },
  {
    status: "",
    promotionName: "Winter Special",
    startDate: "2024, September 15",
    endDate: "2024, December 15",
    validityStatus: "Ended",
    decisionStatus: "Rejected",
  },
  {
    status: "",
    promotionName: "Holiday Bonanza",
    startDate: "2024, October 1",
    endDate: "2024, December 31",
    validityStatus: "Active",
    decisionStatus: "Approved",
  },
  {
    status: "Pending",
    promotionName: "Black Friday Deal",
    startDate: "2024, October 10",
    endDate: "2024, November 30",
    validityStatus: "Active",
    decisionStatus: "Pending",
  },
  {
    status: "",
    promotionName: "Cyber Monday Sale",
    startDate: "2024, November 1",
    endDate: "2024, December 15",
    validityStatus: "Active",
    decisionStatus: "Approved",
  },
  {
    status: "",
    promotionName: "New Year Promo",
    startDate: "2024, November 15",
    endDate: "2025, January 15",
    validityStatus: "Ended",
    decisionStatus: "Rejected",
  },
  {
    status: "",
    promotionName: "Thanksgiving Offer",
    startDate: "2024, November 20",
    endDate: "2024, December 5",
    validityStatus: "Active",
    decisionStatus: "Approved",
  },
  {
    status: "",
    promotionName: "Year-End Clearance",
    startDate: "2024, December 1",
    endDate: "2024, December 31",
    validityStatus: "Ended",
    decisionStatus: "Approved",
  },
];

const PromotionManagement = () => {
  return (
    <>
      <h1 className="text-3xl font-bold ml-16">Dashboard</h1>

      <DataTable columns={columns} data={data} />
    </>
  );
};

export default PromotionManagement;

const DataTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRow, setActiveRow] = useState(null);
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

  const handleDecisionClick = (index) => {
    setActiveRow(index); // Set active row to show approve/reject buttons
  };

  // Handle Approve/Reject Button Click
  const handleDecisionAction = (action, index) => {
    console.log(`Row ${index + 1} Decision: ${action}`);
    setActiveRow(null); // Hide buttons after click
  };

  return (
    <>
      {/* Search Bar */}
      <div className="flex mx-8 mt-8 md:mt-0 justify-center md:justify-end items-center mb-4 ">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 pl-8 rounded-lg border-gray-500" // Added pl-8 for left padding
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CiSearch
            size={24}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />{" "}
          {/* Adjusted positioning */}
        </div>
      </div>
      {/*  */}
      <div className=" border rounded-lg">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full    shadow-md rounded">
            <thead className="bg-[#F9F9FD]   ">
              <tr className="">
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="p-4 border-b text-[#2A2A2A]  text-left cursor-pointer"
                    onClick={() => handleSort(column.accessor)}
                  >
                    <div className="flex items-center   gap-2">
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
            <tbody className="">
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100   ">
                  {columns.map((column) => {
                    let cellBackground = ""; // Default cell background
                    let textColor = ""; // Default text color
                    let cellContent = item[column.accessor];

                    // Determine background and text color based on column accessor and cell value
                    if (column.accessor === "status") {
                      if (cellContent === "New") {
                        cellBackground = "#EAFDEE";
                        textColor = "#147129";
                      } else if (cellContent === "Pending") {
                        cellBackground = "#FFFAE4";
                        textColor = "#716423";
                      }
                    } else if (column.accessor === "validityStatus") {
                      if (cellContent === "Active") {
                        cellBackground = "#EAFDEE";
                        textColor = "#147129";
                      } else if (cellContent === "Ended") {
                        cellBackground = "#FFEBE6";
                        textColor = "#B42700";
                      }
                    }

                    return (
                      <td key={column.accessor} className="px-2 py-4 border-b">
                        <div
                          style={{
                            backgroundColor: cellBackground,
                            color: textColor,
                            padding: "4px 8px", // Add padding for visual appeal
                            borderRadius: "9999px", // Fully rounded
                            display: "inline-block", // Ensure the div only takes as much width as needed
                            whiteSpace: "nowrap", // Prevent text wrapping
                            margin: "0 auto", // Center the div horizontally if needed
                          }}
                          className="w-fit text-sm  " // Apply width fit
                        >
                          <p
                            style={{ color: textColor, margin: 0 }} // Apply text color to p
                            className="text-gray-700 "
                          >
                            {/* Check if the cell is the "Decision Status" cell */}
                            {column.accessor === "decisionStatus" ? (
                              activeRow === index ? (
                                // Show Approve/Reject buttons if this row is active
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() =>
                                      handleDecisionAction("Approved", index)
                                    }
                                    className="bg-blue-500 text-white p-1 rounded"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDecisionAction("Rejected", index)
                                    }
                                    className="bg-red-500 text-white p-1 rounded"
                                  >
                                    Reject
                                  </button>
                                </div>
                              ) : (
                                // Otherwise show the decision status with a click handler
                                <span
                                  onClick={() => handleDecisionClick(index)}
                                  className="cursor-pointer"
                                >
                                  {item[column.accessor]}
                                </span>
                              )
                            ) : (
                              // Render other cells normally
                              cellContent
                            )}
                          </p>
                        </div>
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
