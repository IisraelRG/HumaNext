import React, { useState } from "react";
import Axios from "axios";

function CategoriasNominas() {
  const [nombre, setnombre] = useState("");
  const [fecha_de_nacimiento, setfecha_de_nacimiento] = useState("");
  const [rfc, setrfc] = useState("");
  const [curp, setcurp] = useState("");
  const [sexo, setsexo] = useState("");
  const [estado_civil, setestado_civil] = useState("");
  const [nacionalidad, setnacionalidad] = useState("");

  const [empleadosLista, setEmpleadosLista] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      fecha_de_nacimiento: fecha_de_nacimiento,
      rfc: rfc,
      curp: curp,
      sexo: sexo,
      estado_civil: estado_civil,
      nacionalidad: nacionalidad,
    }).then(() => {
      getEmpleados();
    });
  };
  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados")
      .then((response) => {
        setEmpleadosLista(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  getEmpleados();
  return (
    <div>
      <form>
        <div className="mb-3">
          <h3>Categorias Nominas</h3>

          <div className="mb-3">
            <label for="" className="form-label">
              Nombre Completo
            </label>
            <input
              onChange={(event) => {
                setnombre(event.target.value);
              }}
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="Nombre Completo"
            />
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              onChange={(event) => {
                setfecha_de_nacimiento(event.target.value);
              }}
              type="date"
              className="form-control"
              name=""
              id=""
            />
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              RFC
            </label>
            <input
              onChange={(event) => {
                setrfc(event.target.value);
              }}
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="RFC"
            />
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              curp
            </label>
            <input
              onChange={(event) => {
                setcurp(event.target.value);
              }}
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="RFC"
            />
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              Genero
            </label>
            <select
              onChange={(event) => {
                setsexo(event.target.value);
              }}
              className="form-select form-select-lg"
              name=""
              id=""
            >
              <option selected>Seleccionar uno</option>
              <option value="">Hombre</option>
              <option value="">Mujer</option>
              <option value="">Otros</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              estado_civil
            </label>
            <input
              onChange={(event) => {
                setestado_civil(event.target.value);
              }}
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="estado_civil"
            />
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              nacionalidad
            </label>
            <input
              onChange={(event) => {
                setnacionalidad(event.target.value);
              }}
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="nacionalidad"
            />
          </div>

          <a
            onClick={add}
            name=""
            id=""
            className="btn btn-primary"
            href="#"
            role="button"
          >
            Agregar
          </a>

          <div class="table-responsive">
            <table class="table table-striped table-hover table-borderless table-primary align-middle">
              <thead class="table-light">
                <caption>Gestion de empleados</caption>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha_de_nacimiento</th>
                  <th>RFC</th>
                  <th>CURP</th>
                  <th>Sexo</th>
                  <th>Estado_civil</th>
                  <th>Nacionalidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {empleadosLista.map((val, key) => {
                  return (
                    <tr key={val.id_datos_personales} class="table-primary">
                      <td scope="row">{val.Nombre}</td>
                      <td>{val.Fecha_de_nacimiento}</td>
                      <td>{val.RFC}</td>
                      <td>{val.CURP}</td>
                      <td>{val.Sexo}</td>
                      <td>{val.Estado_civil}</td>
                      <td>{val.Nacionalidad}</td>
                      <td>
                        <a
                          onClick={add}
                          name=""
                          id=""
                          className="btn btn-primary"
                          href="#"
                          role="button"
                        >
                          Editar
                        </a>
                        <a
                          onClick={add}
                          name=""
                          id=""
                          className="btn btn-primary"
                          href="#"
                          role="button"
                        >
                          Eliminar
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CategoriasNominas;
