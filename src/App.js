import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleado/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleado/AgregarEmpleado";
import EditarEmpleado from "./empleado/EditarEmpleado";

/*
*AUTOR: ANTONIO PEINADO SEVILLA
*CRUD sencillo con spring en el backend y react en el frontend
*
*/




function App() {
  return (
    <div className="container">

    <BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route exact path="/" element={<ListadoEmpleados/>}/>
      <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
      <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
    </Routes>

    </BrowserRouter>



   
    </div>
  )

}

export default App;
