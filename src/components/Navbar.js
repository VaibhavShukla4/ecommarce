import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="_navbar">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ height: "85px" }}
      >
        <div className="container-fluid mx-5">
          <NavLink className="navbar-brand " to="/">
            👌 Super-Selection
          </NavLink>
          <NavLink className="navbar-brand" to="/Cart">
            <AiOutlineShoppingCart
              className="navbar-brand"
              style={{ width: "50px", height: "50px" }}
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
