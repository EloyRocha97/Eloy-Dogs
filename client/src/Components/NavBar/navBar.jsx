import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../Views/Search/search";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <div id="NavBar" className={style.NavLinks}>
      <div>
        <NavLink
          activeStyle={{
            color: "180,180,180",
            fontWeight: "Open Sans",
          }}
          className={style.Link}
          to="/create"
        >
          CREAR
        </NavLink>
      </div>
      <div>
        <NavLink
          activeStyle={{
            color: "180,180,180",
            fontWeight: "Open Sans",
          }}
          className={style.Link}
          to="/home"
        >
          <span>INICIO</span>
        </NavLink>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
