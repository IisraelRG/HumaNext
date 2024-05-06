import React from "react";
import "./../assets/css/MenuLeft.css";
import IconInicio from "./../assets/img/iconInicio.svg";
import IconEmpleados from "./../assets/img/iconEmpleados.svg";
import IconNominas from "./../assets/img/iconNominas.svg";
import IconReclutamiento from "./../assets/img/iconReclutamiento.svg";
import IconEvaluacionDesepeno from "./../assets/img/iconEvaluacionDesepeno.svg";
import IconBeneficios from "./../assets/img/iconBeneficios.svg";
import { Link } from "react-router-dom";

function MenuLeft() {
  return (
    <div className="menuLeft">
      <Link to="/" className="btnIconLeft">
        <img src={IconInicio} className="iconLeft" alt="" />
      </Link>
      <Link to="/empleados" className="btnIconLeft">
        <img src={IconEmpleados} className="iconLeft" alt="" />
      </Link>
      <Link to="/nominas" className="btnIconLeft">
        <img src={IconNominas} className="iconLeft" alt="" />
      </Link>
      <Link to="/reclutamiento" className="btnIconLeft">
        <img src={IconReclutamiento} className="iconLeft" alt="" />
      </Link>
      <Link to="/evaluacion" className="btnIconLeft">
        <img src={IconEvaluacionDesepeno} className="iconLeft" alt="" />
      </Link>
      <Link to="/gestionBeneficios" className="btnIconLeft">
        <img src={IconBeneficios} className="iconLeft" alt="" />
      </Link>
      <Link to="/capacitacionDesarrollo" className="btnIconLeft">
        <img src={IconInicio} className="iconLeft" alt="" />
      </Link>
      <Link to="/tiempoAsistencias" className="btnIconLeft">
        <img src={IconInicio} className="iconLeft" alt="" />
      </Link>
      <Link to="/comunicacionInterna" className="btnIconLeft">
        <img src={IconInicio} className="iconLeft" alt="" />
      </Link>
    </div>
  );
}

export default MenuLeft;
