import Shop_card from "../../reusable_components/Shop_card";
import { Shops } from "../../components/customer/giftCarddata";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useState } from "react";
const All_retailers = () => {
  const shopsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Shops.length / shopsPerPage);

  const currentShops = Shops.slice(
    (currentPage - 1) * shopsPerPage,
    currentPage * shopsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render the pagination controls
  // const renderPagination = () => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pageNumbers.push(
  //       <button
  //         key={i}
  //         className={`px-3 py-1 ${
  //           currentPage === i
  //             ? "bg-[#0D90C1] text-white"
  //             : "bg-white text-gray-600"
  //         } rounded-full`}
  //         onClick={() => setPage(i)}
  //       >
  //         {i}
  //       </button>
  //     );
  //   }

  //   return (
  //     <div className="flex justify-center items-center gap-2 mt-4">
  //       <button
  //         className={`px-3 py-1 ${
  //           currentPage === 1
  //             ? "opacity-50 cursor-not-allowed"
  //             : "bg-white text-[#949494]"
  //         } border-2 rounded-xl `}
  //         onClick={goToPreviousPage}
  //         disabled={currentPage === 1}
  //       >
  //         Previous
  //       </button>
  //       {pageNumbers}
  //       <button
  //         className={`px-3 py-1 ${
  //           currentPage === totalPages
  //             ? "opacity-50 cursor-not-allowed"
  //             : "bg-white"
  //         } border rounded-xl`}
  //         onClick={goToNextPage}
  //         disabled={currentPage === totalPages}
  //       >
  //         Next
  //       </button>
  //     </div>
  //   );
  // };

  // Render the pagination controls
  const renderPagination = () => {
    const pageNumbers = [];
    const visiblePages = 3;

    pageNumbers.push(
      <button
        key={1}
        className={`px-3 py-1 ${
          currentPage === 1
            ? "bg-[#0D90C1] text-white"
            : "bg-white text-gray-600"
        } rounded-full`}
        onClick={() => setPage(1)}
      >
        1
      </button>
    );

    if (currentPage > visiblePages + 2) {
      pageNumbers.push(<span key="start-ellipsis">...</span>);
    }

    for (
      let i = Math.max(2, currentPage - visiblePages);
      i <= Math.min(totalPages - 1, currentPage + visiblePages);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 ${
            currentPage === i
              ? "bg-[#0D90C1] text-white"
              : "bg-white text-gray-600"
          } rounded-full`}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }

    // Add ellipses after the current block if necessary
    if (currentPage < totalPages - visiblePages - 1) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
    }

    // Push the last page
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          className={`px-3 py-1 ${
            currentPage === totalPages
              ? "bg-[#0D90C1] text-white"
              : "bg-white text-gray-600"
          } rounded-full`}
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className={`px-3 py-1 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-white text-[#949494]"
          } border-2 rounded-xl`}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers}
        <button
          className={`px-3 py-1 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "bg-white"
          } border rounded-xl`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <>
        <div className=" mt-12 mb-12 rounded-md  mx-4">
          <div className="md:flex   mx-4  text-balance justify-between my-4 md:mx-8  font-semibold">
            <p className="md:text-2xl text-xl roboto-bold  ">
              Retailer near me
            </p>
            <div className="flex gap-4 mt-2 md:mt-0 ">
              <Sort />
              <Filter />
              <Search />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-8  mt-8  px-2  mb-8 md:mx-4">
            <Shop_card datas={currentShops} />
          </div>
          {renderPagination()}
        </div>
      </>
    </>
  );
};

export default All_retailers;

function Sort() {
  return (
    <div className="flex rounded-md border-[#989898] items-center p-2 gap-2 border justify-between">
      <p>Sort</p>
      <HiAdjustmentsHorizontal />
    </div>
  );
}

function Filter() {
  return (
    <div className="flex rounded-md border-[#989898] items-center p-2 gap-2 border justify-between">
      <p>Filter</p>
      <HiAdjustmentsHorizontal />
    </div>
  );
}

const Search = () => {
  return (
    <div className={`relative w-72 `}>
      <input
        name="global_input"
        type="text"
        className="peer w-full h-10 bg-transparent text-blue-gray-700 font-sans font-normal outline-none border border-[#B4B1B4] rounded-[7px] pl-3 pr-10 py-2.5 text-sm placeholder-gray-500"
        placeholder="Search retailers"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B696B]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
    </div>
  );
};
