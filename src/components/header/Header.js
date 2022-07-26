import React from "react";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import "./header.css";

const Header = ({ theme, toggleTheme, onSwitch }) => {
  return (
    <header data-theme={theme}>
      <div className="container --flex-between">
        <div className="logo">
          <img src={logo} alt="logo" width={160} />
        </div>
        <nav>
          <ul className="--flex-between">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
        <div onClick={toggleTheme}>
          <span className="toggle-btn">
            <FaMoon color="pink" size={16} />
            <FaSun color="yellow" size={16} />
            <div className={onSwitch ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
