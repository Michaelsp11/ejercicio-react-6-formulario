import { Titulo } from "./Titulo";
import { Boton } from "./Boton";
import { useEffect, useState } from "react";
export const Paso2 = (props) => {
  const { formulario, guardarDatos, siguiente, anterior } = props;
  const { nombre, apellidos, fecha, correo } = formulario;
  const [btnBloqueado, setBtnBloqueado] = useState(true);
  const [nombreForm, setNombreForm] = useState(formulario.nombre);
  const [apellidosForm, setApellidosForm] = useState(formulario.apellidos);
  const [fechaForm, setFechaForm] = useState(formulario.fecha);
  const [correoForm, setCorreoForm] = useState(formulario.correo);
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
          texto="Anterior"
          desactivado={false}
          accion={() => {
            guardarDatos(nombreForm, apellidosForm, fechaForm, correoForm);
            anterior();
          }}
        />
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
