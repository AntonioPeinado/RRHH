import React ,{useEffect, useState, } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarEmpleado() {
  
   const urlBase = "http://localhost:8080/rh-app/empleados"; 

    let navegacion = useNavigate()

    const {id} = useParams()


const [empleado, setEmpleado]=useState({
    nombre:"",
    departamento:"",
    sueldo:""
})

const{nombre, departamento, sueldo}= empleado


useEffect(()=> {

    cargarEmpleado()
}, [])


//Editar empleado
const cargarEmpleado = async () =>{
    const resultado = await axios.get(`${urlBase}/${id}`)
    setEmpleado(resultado.data)
}

const onImpuChange = (e)=> {
    //spread operator ... (expandir los atributos)
    setEmpleado({...empleado, [e.target.name]: e.target.value})

}

const onSubmit = async (e)=> {
    e.preventDefault()
    
    await axios.put(`${urlBase}/${id}`, empleado)
    navegacion("/")
}

  return (
    <div classNameName="container">
      <div classNameName="container text-center" style={{ margin: "30px" }}>
        <h3>Editar Empleado</h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            aria-describedby="emailHelp"
            name="nombre"
            value={nombre}
            onChange={(e) => onImpuChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={(e) => onImpuChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">
            Sueldo
          </label>
          <input
            type="text"
            className="form-control"
            id="sueldo"
            name="sueldo"
            value={sueldo}
            onChange={(e) => onImpuChange(e)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Guardar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );

}
