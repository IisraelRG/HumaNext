import React, { useState } from "react";
import Axios from "axios";
import "./../assets/css/TablaEmpleados.css";
import IconPluss from "./../assets/img/iconPluss.svg";
import IconClose from "./../assets/img/iconClose.svg";

function TablaNomina() {
  const [nombre, setnombre] = useState("");
  const [fecha_de_nacimiento, setfecha_de_nacimiento] = useState("");
  const [rfc, setrfc] = useState("");
  const [curp, setcurp] = useState("");
  const [sexo, setsexo] = useState("");
  const [estado_civil, setestado_civil] = useState("");
  const [nacionalidad, setnacionalidad] = useState("");
  const [id_datos_personales, setid_datos_personales] = useState(0);

  const [editar, seteditar] = useState(false);

  const [empleadosLista, setEmpleadosLista] = useState([]);

  const [mostrarFormulario, setMostrarFormularios] = useState(false);

  const [mostrarEditDelete, setMostrarEditDelete] = useState(false);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      fecha_de_nacimiento: new Date(fecha_de_nacimiento)
        .toISOString()
        .split("T")[0],
      rfc: rfc,
      curp: curp,
      sexo: sexo,
      estado_civil: estado_civil,
      nacionalidad: nacionalidad,
    }).then(() => {
      getEmpleados();
      limpiarEmpleados();
    });
  };

  const update = () => {
    Axios.put("http://localhost:3001/update", {
      nombre: nombre,
      fecha_de_nacimiento: formatDate(fecha_de_nacimiento),
      rfc: rfc,
      curp: curp,
      sexo: sexo,
      estado_civil: estado_civil,
      nacionalidad: nacionalidad,
      id_datos_personales: id_datos_personales,
    }).then(() => {
      getEmpleados();
      limpiarEmpleados();
      seteditar(false);
    });
  };

  const deleteEmpleado = (id_datos_personales) => {
    Axios.delete(`http://localhost:3001/delete/${id_datos_personales}`).then(
      () => {
        getEmpleados();
        limpiarEmpleados();
        seteditar(false);
      }
    );
  };

  const limpiarEmpleados = () => {
    setnombre("");
    setfecha_de_nacimiento("");
    setrfc("");
    setcurp("");
    setsexo("");
    setestado_civil("");
    setnacionalidad("");
    seteditar(false);
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
  const editarEmpleados = (val) => {
    setnombre(val.Nombre);
    setfecha_de_nacimiento(val.Fecha_de_nacimiento);
    setrfc(val.RFC);
    setcurp(val.CURP);
    setsexo(val.Sexo);
    setestado_civil(val.Estado_civil);
    setid_datos_personales(val.id_datos_personales);
    seteditar(true);
  };

  getEmpleados();

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  const toggleFormulario = () => {
    setMostrarFormularios(!mostrarFormulario);
  };

  const toggleEditDelete = () => {
    setMostrarEditDelete(!mostrarEditDelete);
  };
  return (
    <div className="contentMain">
      {mostrarEditDelete && (
        <div className="filtroEditDelete">
          {empleadosLista.map((val, key) => {
            return (
              <div className="ventanaEditDelete" key={val.id_datos_personales}>
                <a href="" className="btnClose">
                  <img src={IconClose} alt=""></img>
                </a>
                <h3>¿Que accion deseas realizar?</h3>
                <div className="btnsEditDelete">
                  <a
                    onClick={() => {
                      toggleEditDelete();
                      toggleFormulario();
                      editarEmpleados(val.id_datos_personales);
                    }}
                    name=""
                    id=""
                    className="btnEdit"
                    href="#"
                    role="button"
                  >
                    Editar
                  </a>
                  <a
                    onClick={() => {
                      deleteEmpleado(val.id_datos_personales);
                      setMostrarEditDelete(false);
                    }}
                    name=""
                    id=""
                    className="btnDelete"
                    href="#"
                    role="button"
                  >
                    Eliminar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="contentSubtitle">
        <h3>Categorias Nomina</h3>
        <a onClick={toggleFormulario} className="btnAdd" href="#">
          <img src={IconPluss} alt=""></img>
        </a>
      </div>
      {mostrarFormulario && (
        <div className="filtroEditDelete" id="formTables">
          <div className="contentFormularioEmpleado">
            <a href="#" className="btnClose" onClick={toggleFormulario}>
              <img src={IconClose} alt="" />
            </a>
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
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <label for="" className="form-label">
                Fecha de nacimiento
              </label>
              <input
                onChange={(event) => {
                  const formattedDate = formatDate(event.target.value);
                  setfecha_de_nacimiento(formattedDate);
                }}
                type="date"
                className="form-control"
                name=""
                id=""
                value={fecha_de_nacimiento}
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
                value={rfc}
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
                placeholder="CURP"
                value={curp}
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
                value={sexo}
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
                value={estado_civil}
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
                value={nacionalidad}
              />
            </div>
            <div class="card-footer text-muted">
              {editar ? (
                <div>
                  <a
                    onClick={update}
                    id=""
                    className="btn btn-warning"
                    href="#"
                    role="button"
                  >
                    Actualizar
                  </a>
                  <a
                    onClick={limpiarEmpleados}
                    id=""
                    className="btn btn-warning"
                    href="#"
                    role="button"
                  >
                    Cancelar
                  </a>
                </div>
              ) : (
                <a
                  onClick={add}
                  id=""
                  className="btn btn-primary"
                  href="#"
                  role="button"
                >
                  Agregar
                </a>
              )}
            </div>{" "}
          </div>
        </div>
      )}
      <div class="table-responsive">
        <table class="table table-striped table-hover table-borderless table-primary align-middle">
          <thead class="table-light">
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
                      onClick={() => {
                        editarEmpleados(val);
                        toggleEditDelete();
                      }}
                      name=""
                      id=""
                      className="btnEdit"
                      href="#"
                      role="button"
                    >
                      Modificar
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
  );
}
export default TablaNomina;
