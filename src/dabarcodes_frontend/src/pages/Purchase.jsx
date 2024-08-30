import React, { useEffect } from "react";
import Navbar from "../components/purchase/Navbar";
import Purchase_Type from "../components/purchase/Purchase_Type";

const Purchase = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      {/* <Navbar /> */}

      <Purchase_Type />
    </>
  );
};

export default Purchase;
