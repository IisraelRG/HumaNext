import React from "react";
import "./../assets/css/MenuTop.css";
import iconTutoriales from "./../assets/img/iconTutoriales.svg";
import iconNotificaciones from "./../assets/img/iconNotificaciones.svg";
import iconUser from "./../assets/img/iconUser.svg";
import iconSearch from "./../assets/img/iconSearch.svg";
import { Link, Outlet } from "react-router-dom";

function MenuTop() {
  return (
    <div>
      <header className="header">
        <div className="">
          <Link to="/">
            <h3>HumaNext</h3>
          </Link>
        </div>
        <div className="contentSearch">
          <input className="inputSearch" type="text" placeholder="Text input" />
          <a className="btnSearch" href="">
            <img src={iconSearch} alt="" />
          </a>
        </div>
        <div className="iconTop">
          <a href="" className="btnTutoriales">
            <img
              className="iconImage"
              src={iconTutoriales}
              alt="Icono de tutoriales"
            />
          </a>
          <a href="" className="btnNotificaciones">
            <img
              className="iconImage"
              src={iconNotificaciones}
              alt="Icono de tutoriales"
            />
          </a>
          <Link to="/perfil" className="btnUser">
            <img src={iconUser} alt="Icono de tutoriales" />
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default MenuTop;
