import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Account = () => {
  return (
    <div>
      <Navbar />
      {/* An <Outlet> should be used in parent route elements to render their child route elements.  */}
      <Outlet />
    </div>
  );
};

export default Account;
