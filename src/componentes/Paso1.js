import { Titulo } from "./Titulo";
import { Boton } from "./Boton";
import { useEffect, useState } from "react";
export const Paso1 = (props) => {
  const { formulario, guardarDatos, siguiente } = props;
  const { nombre, apellidos, fecha, correo } = formulario;
  const [btnBloqueado, setBtnBloqueado] = useState(true);
  const [nombreForm, setNombreForm] = useState(nombre);
  const [apellidosForm, setApellidosForm] = useState(apellidos);
  const [fechaForm, setFechaForm] = useState(fecha);
  const [correoForm, setCorreoForm] = useState(correo);
  const [edad, setEdad] = useState("0");
  const calcularEdad = (fecha) =>
    setEdad(new Date().getFullYear() - new Date(fecha).getFullYear());
  const compruebaFormulario = () => {
    if (
      nombreForm !== "" &&
      apellidosForm !== "" &&
      fechaForm !== "" &&
      correoForm !== ""
    ) {
      setBtnBloqueado(false);
    }
  };
  useEffect(() => {
    compruebaFormulario();
  });
  return (
    <>
      <Titulo titulo="Datos Personales" />
      <form>
        <div className="form-group">
          <label htmlFor="nombre pl-3">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            defaultValue={nombre}
            onChange={(e) => {
              setNombreForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos pl-3">Apellidos:</label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            defaultValue={apellidos}
            onChange={(e) => {
              setApellidosForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha pl-3">Fecha de nacimiento:</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            defaultValue={fecha}
            onChange={(e) => {
              setFechaForm(e.target.value);
              calcularEdad(e.target.value);
              compruebaFormulario();
            }}
          />
          <label>{edad} Años</label>
        </div>
        <div className="form-group">
          <label htmlFor="correo pl-3">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            defaultValue={correo}
            onChange={(e) => {
              setCorreoForm(e.target.value);
              compruebaFormulario();
            }}
          />
        </div>
        <Boton
          texto="Siguiente"
          desactivado={btnBloqueado}
          accion={() => {
            guardarDatos(nombreForm, apellidosForm, fechaForm, correoForm);
            siguiente();
          }}
        />
      </form>
    </>
  );
};
