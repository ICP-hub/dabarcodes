// import { Link, useLocation } from "react-router-dom";

// const Breadcrumb = () => {
//   const location = useLocation();
//   const pathnames = location.pathname
//     .split("/")
//     .filter((x) => x)
//     .map((segment) => decodeURIComponent(segment));

//   // Check if the current path is exactly '/'
//   const isHomePage = location.pathname === "/";

//   return (
//     <>
//       <div className="bg-[#0D90C1] h-9 text-white text-end p-2">
//         How to use daBarcodes
//       </div>
//       <div className="border-2 border-b-[#B4B1B4] text-white p-2 h-14 flex items-center">
//         {!isHomePage && pathnames.length > 0 ? (
//           <Link to="/" className="text-[#646464]">
//             Home
//           </Link>
//         ) : (
//           !isHomePage && <span className="text-[#171717] underline">Home</span>
//         )}
//         {pathnames.map((name, index) => {
//           const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;
//           return (
//             <div key={name} className="flex items-center">
//               <span className="mx-2">/</span>
//               {isLast ? (
//                 <span className="text-[#171717] underline">{name}</span>
//               ) : (
//                 <Link to={routeTo} className="text-[#646464]">
//                   {name}
//                 </Link>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Breadcrumb;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useHistory = () => {
  const [history, setHistory] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const newPath = location.pathname;

    setHistory((prevHistory) => {
      const index = prevHistory.indexOf(newPath);
      if (index === -1) {
        return [...prevHistory, newPath];
      }
      return prevHistory.slice(0, index + 1);
    });
  }, [location]);

  return history;
};

const Breadcrumb = () => {
  const location = useLocation();
  const history = useHistory();

  const getBreadcrumbs = () => {
    const pathnames = history.filter((path) => path !== location.pathname);
    pathnames.push(location.pathname);

    return pathnames.map((path) => {
      const segments = path.split("/").filter((x) => x);
      const breadcrumbPath = `/${segments.join("/")}`;
      const name = segments.length
        ? decodeURIComponent(segments[segments.length - 1])
        : "";

      return {
        name: name,
        path: breadcrumbPath,
      };
    });
  };

  const breadcrumbs = getBreadcrumbs();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <div className="bg-[#0D90C1] h-9 text-white text-end p-2">
        How to use daBarcodes
      </div>
      <div className="border-2 border-b-[#B4B1B4] text-white p-2 h-14 flex flex-wrap items-center">
        {breadcrumbs.length > 0 && (
          <div className="flex items-center">
            <Link to="/" className="text-[#646464]">
              Home
            </Link>
            <span className="mx-2">/</span>
          </div>
        )}
        {breadcrumbs.slice(0, -1).map((breadcrumb, index) => (
          <div key={breadcrumb.path} className="flex items-center">
            <Link to={breadcrumb.path} className="text-[#646464]">
              {breadcrumb.name}
            </Link>
            <span className="mx-2">/</span>
          </div>
        ))}
        {breadcrumbs.length > 0 && (
          <div className="flex items-center">
            <span className="text-[#171717] underline">
              {breadcrumbs[breadcrumbs.length - 1].name}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Breadcrumb;
