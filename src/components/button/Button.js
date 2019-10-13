import React from "react";
import { NavLink } from "react-router-dom";
import "./button.scss";

const Button = ({ to, onClickSoal, buttonText }) => {
  return (
    <div onClick={onClickSoal}>
      <NavLink className="button" to={to}>
        {buttonText}
      </NavLink>
    </div>
  );
};

export default Button;
