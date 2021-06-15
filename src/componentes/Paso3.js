import { Titulo } from "./Titulo";
import { Boton } from "./Boton";
import { useEffect, useState } from "react";
export const Paso3 = (props) => {
  const { formulario, guardarDatos, siguiente, anterior } = props;
  const { nombreUsuario, contrasenya, recordarContrasenya } = formulario;
  const [btnBloqueado, setBtnBloqueado] = useState(true);
  const [nombreForm, setNombreForm] = useState("");
  const [contrasenyaForm, setContrasenyaForm] = useState("");
  const [recordarContrasenyaForm, setRecordarContrasenyaForm] =
    useState(recordarContrasenya);
  const [error, setError] = useState("");
  const mismosDatos = () =>
    nombreForm === nombreUsuario && contrasenyaForm === contrasenya;
  const compruebaFormulario = () => {
    if (nombreForm !== "" && contrasenyaForm !== "") {
      setBtnBloqueado(false);
      return;
    }
    setBtnBloqueado(true);
  };
  useEffect(() => {
    compruebaFormulario();
  });
  return (
    <>
      <Titulo titulo="Login" />
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            onChange={(e) => {
              setNombreForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              setContrasenyaForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="recordar"
            onChange={(e) => {
              setRecordarContrasenyaForm(e.target.checked);
              compruebaFormulario();
            }}
            checked={recordarContrasenyaForm}
          />
          <label htmlFor="recordar" className="pl-2">
            Recordar contrasenya
          </label>
        </div>
        <div className="text-danger">{error}</div>
        <Boton
          texto="Anterior"
          desactivado={false}
          accion={() => {
            anterior();
          }}
        />
        <Boton
          texto="Acceder"
          desactivado={btnBloqueado}
          accion={(e) => {
            e.preventDefault();
            if (mismosDatos()) {
              setError("");
              guardarDatos(recordarContrasenyaForm);
              siguiente();
            } else {
              setError(
                "Los datos introducidos no concuerdan con los datos de acceso."
              );
            }
          }}
        />
      </form>
    </>
  );
};
