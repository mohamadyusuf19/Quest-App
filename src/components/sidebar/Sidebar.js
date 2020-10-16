import React from "react";
import isEmpty from "lodash/isEmpty";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({ data, onClickSoal }) => {
  return (
    <ul className="sidebar-container">
      {data.map((item, index) => {
        return (
          <div key={index} onClick={() => onClickSoal(item)}>
            <NavLink
              activeClassName="active"
              className={isEmpty(item.value) ? "kotak-salmon" : "kotak-green"}
              to={`/${index + 1}`}
            >
              {index + 1}
            </NavLink>
          </div>
        );
      })}
    </ul>
  );
};

export default Sidebar;
