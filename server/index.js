const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Soport123",
  database: "sistema_rh",
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const fecha_de_nacimiento = req.body.fecha_de_nacimiento;
  const rfc = req.body.rfc;
  const curp = req.body.curp;
  const sexo = req.body.sexo;
  const estado_civil = req.body.estado_civil;
  const nacionalidad = req.body.nacionalidad;

  try {
    db.query(
      "INSERT INTO `datos_personales`(`Nombre`, `Fecha_de_nacimiento`, `RFC`, `CURP`, `Sexo`, `Estado_civil`, `Nacionalidad`) VALUES (?,?,?,?,?,?,?)",
      [
        nombre,
        fecha_de_nacimiento,
        rfc,
        curp,
        sexo,
        estado_civil,
        nacionalidad,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al registrar empleado");
        } else {
          res.send("Empleado registrado con exito!");
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al registrar empleado");
  }
});

app.get("/empleados", (req, res) => {
  try {
    db.query("SELECT * FROM datos_personales", (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al mostrar los empleados");
      } else {
        res.json(result);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al mostrar los empleados");
  }
});

app.put("/update", (req, res) => {
  const nombre = req.body.nombre;
  const fecha_de_nacimiento = req.body.fecha_de_nacimiento;
  const rfc = req.body.rfc;
  const curp = req.body.curp;
  const sexo = req.body.sexo;
  const estado_civil = req.body.estado_civil;
  const nacionalidad = req.body.nacionalidad;
  const id_datos_personales = req.body.id_datos_personales;

  try {
    db.query(
      "UPDATE `datos_personales` SET Nombre = ?, Fecha_de_nacimiento = ?,RFC = ?,CURP = ?,Sexo = ?,Estado_civil = ?,Nacionalidad = ? WHERE id_datos_personales = ?",
      [
        nombre,
        fecha_de_nacimiento,
        rfc,
        curp,
        sexo,
        estado_civil,
        nacionalidad,
        id_datos_personales,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al actualizar empleado");
        } else {
          res.send("Empleado actualizado con éxito!");
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al actualizar empleado");
  }
});

app.delete("/delete/:id_datos_personales", (req, res) => {
  const id_datos_personales = req.params.id_datos_personales;

  try {
    db.query(
      "DELETE FROM `datos_personales` WHERE id_datos_personales = ?",
      [id_datos_personales],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al actualizar empleado");
        } else {
          res.send("Empleado Eliminado con éxito!");
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al actualizar empleado");
  }
});

app.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});
