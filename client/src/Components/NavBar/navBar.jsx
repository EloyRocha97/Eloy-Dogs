import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./navBar.module.css";
import SearchBar from "../../Views/Search/search";

const NavBar = () => {
  const location = useLocation();

  return (
    <div id="NavBar" className={style.navBar}>
      <div className={style.links}>
        <NavLink
          to="/create"
          className={style["small-links"]}
          style={(isActive) => ({
            color: isActive ? "#d13017" : "#8e1300",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Crear
        </NavLink>

        <NavLink
          to="/home"
          className={style["small-links"]}
          style={(isActive) => ({
            color: isActive ? "#d13017" : "#8e1300",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Inicio
        </NavLink>
      </div>
      {location.pathname === "/home" && <SearchBar />}
    </div>
  );
};

export default NavBar;
