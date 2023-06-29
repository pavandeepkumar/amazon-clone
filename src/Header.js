import React from "react";
import "./Header.css";
import "./nav_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="nav_logo_of_amazon"
        />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header__optionLineOne">Hello ,Pavandeep</span>
          <span className="header__optionLineTwo"> Sign In </span>
        </div>

        <div className="header_option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo"> Order </span>
        </div>

        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header__optionLineTwo  header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
