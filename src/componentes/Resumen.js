import { Titulo } from "./Titulo";
export const Resumen = (props) => {
  const {
    formulario: {
      nombre,
      apellidos,
      fecha,
      correo,
      nombreUsuario,
      contrasenya,
      recordarContrasenya,
    },
  } = props;
  return (
    <>
      <Titulo titulo="Resumen" />
      <ul class="list-group">
        <li class="list-group-item">{`Nombre: ${nombre}`}</li>
        <li class="list-group-item">{`Apellidos: ${apellidos}`}</li>
        <li class="list-group-item">{`Fecha de nacimiento: ${fecha}`}</li>
        <li class="list-group-item">{`Correo: ${correo}`}</li>
        <li class="list-group-item">{`Nombre de usuario: ${nombreUsuario}`}</li>
        <li class="list-group-item">{`Contraseña: ${contrasenya}`}</li>
        <li class="list-group-item">{`Recordar contraseña: ${recordarContrasenya}`}</li>
      </ul>
    </>
  );
};
