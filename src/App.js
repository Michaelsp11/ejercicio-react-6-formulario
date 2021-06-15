import "bootstrap/dist/css/bootstrap.min.css";

import { Paso1 } from "./componentes/Paso1";
import { Paso2 } from "./componentes/Paso2";
import { Paso3 } from "./componentes/Paso3";
import { Resumen } from "./componentes/Resumen";
import { useState } from "react";
function App() {
  const [nPaso, setNPaso] = useState(1);
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    fecha: "",
    correo: "",
    nombreUsuario: "",
    contrasenya: "",
    repetirContrasenya: "",
    recordarContrasenya: false,
  });
  const next = () => {
    setNPaso(nPaso + 1);
  };
  const back = () => {
    setNPaso(nPaso - 1);
  };
  const guardarDatosPersonales = (nombre, apellidos, fecha, correo) => {
    setFormulario({
      ...formulario,
      nombre: nombre,
      apellidos: apellidos,
      fecha: fecha,
      correo: correo,
    });
  };
  const guardarDatosAcceso = () => {};
  const guardarLogin = () => {};
  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-12">
          {nPaso === 1 && (
            <Paso1
              formulario={formulario}
              guardarDatos={guardarDatosPersonales}
              siguiente={next}
            />
          )}
          {nPaso === 2 && (
            <Paso2
              formulario={formulario}
              guardarDatos={guardarDatosAcceso}
              anterior={back}
              siguiente={next}
            />
          )}
          {nPaso === 3 && (
            <Paso3
              formulario={formulario}
              guardarDatos={guardarLogin}
              anterior={back}
              siguiente={next}
            />
          )}
          {nPaso === 4 && <Resumen />}
        </div>
      </div>
    </div>
  );
}

export default App;
