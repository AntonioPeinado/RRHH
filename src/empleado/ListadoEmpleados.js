import React, { useState, useEffect } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";


/*
*AUTOR: Antonio Peinado Sevilla
*Listado de empleados
*Eliminar empleado
*/



export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/rh-app/empleados";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);
//Carga la lista de los empleados
  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("resultado");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  };
//Eliminar empleado
  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`)
    cargarEmpleados();

  }

  return (
    <div className="container">
      <div className="container text-center " style={{ margin: "30px" }}>
        <h3>Sistemas de recursos humanos</h3>
      </div>

      <table class="table table-striped table-hover aling-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, indice) => (
            <tr key={indice}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.departamento}</td>
              <td>
              
                <NumericFormat
                  value={empleado.sueldo}
                  displayType={"text"}
                  thousandSeparator=","
                  prefix={"€"}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </td>
             
              <td className="text-center">
                <div>
                  <Link
                    to={`/editar/${empleado.idEmpleado}`}
                    className="btn btn-warning btn-sm me-3"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
