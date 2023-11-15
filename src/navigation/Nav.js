import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search items"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"  />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <BiUserPlus className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
