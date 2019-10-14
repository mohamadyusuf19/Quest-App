import React from "react";
import "./header.scss";
const logo = require("../../assets/qilogo.png");
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" /> <p>Platform</p>
    </div>
  );
};

export default Header;
