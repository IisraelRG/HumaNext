import { Routes, Route } from "react-router-dom";
import MenuLeft from "./../components/MenuLeft";
import Inicio from "./Inicio";
import CategoriasEmpleados from "./CategoriasEmpleados";
import CategoriasNominas from "./CategoriasNominas";
import CategoriasReclutamiento from "./CategoriasReclutamiento";
import EvaluacionDesempeno from "./CategoriasEvaluacionDesempeno";
import GestionBeneficios from "./CategoriaGestionBeneficios";
import CapacitacionDesarrollo from "./CategoriasCapacitacionDesarrollo";
import TiempoAsistencias from "./CategoriasTiempoAsistencias";
import ComunicacionInterna from "./CategoriasComunicacionInterna";
import PerfilUsuario from "./PerfilUsuario";

function Main() {
  return (
    <div>
      <main className="main">
        <MenuLeft />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empleados" element={<CategoriasEmpleados />} />
          <Route path="/nominas" element={<CategoriasNominas />} />
          <Route path="/reclutamiento" element={<CategoriasReclutamiento />} />
          <Route path="/evaluacion" element={<EvaluacionDesempeno />} />
          <Route path="/gestionBeneficios" element={<GestionBeneficios />} />
          <Route
            path="/capacitacionDesarrollo"
            element={<CapacitacionDesarrollo />}
          />
          <Route path="/tiempoAsistencias" element={<TiempoAsistencias />} />
          <Route
            path="/comunicacionInterna"
            element={<ComunicacionInterna />}
          />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>
    </div>
  );
}

export default Main;
