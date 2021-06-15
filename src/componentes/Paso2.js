import { Titulo } from "./Titulo";
import { Boton } from "./Boton";
import { useEffect, useState } from "react";
export const Paso2 = (props) => {
  const { formulario, guardarDatos, siguiente, anterior } = props;
  const { nombreUsuario, contrasenya } = formulario;
  const [btnBloqueado, setBtnBloqueado] = useState(true);
  const [nombreForm, setNombreForm] = useState(nombreUsuario);
  const [contrasenyaForm, setContrasenyaForm] = useState(contrasenya);
  const [repetirContrasenyaForm, setRepetirContrasenyaForm] =
    useState(contrasenya);
  const mismaPassword = () => repetirContrasenyaForm === contrasenyaForm;
  const compruebaFormulario = () => {
    if (nombreForm !== "" && contrasenyaForm !== "") {
      if (mismaPassword()) {
        setBtnBloqueado(false);
        return;
      }
    }
    setBtnBloqueado(true);
  };
  useEffect(() => {
    compruebaFormulario();
  });
  return (
    <>
      <Titulo titulo="Datos de acceso" />
      <form>
        <div className="form-group">
          <label htmlFor="nombre pl-3">Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            defaultValue={nombreUsuario}
            onChange={(e) => {
              setNombreForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password pl-3">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            defaultValue={contrasenya}
            onChange={(e) => {
              setContrasenyaForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="repetirPassword pl-3">Repetir contrasenya:</label>
          <input
            type="password"
            className="form-control"
            id="repetirPassword"
            defaultValue={contrasenya}
            onChange={(e) => {
              setRepetirContrasenyaForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <Boton
          texto="Anterior"
          desactivado={false}
          accion={() => {
            anterior();
          }}
        />
        <Boton
          texto="Siguiente"
          desactivado={btnBloqueado}
          accion={() => {
            guardarDatos(nombreForm, contrasenyaForm);
            siguiente();
          }}
        />
      </form>
    </>
  );
};
