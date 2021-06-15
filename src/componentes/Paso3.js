import { Titulo } from "./Titulo";
export const Paso3 = (props) => {
  const { activo } = props;
  return (
    activo && (
      <>
        <Titulo titulo="Login" />
        <form>
          <div className="form-group">
            <label htmlFor="nombre pl-3">Nombre:</label>
            <input type="text" className="form-control" id="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos pl-3">Apellidos:</label>
            <input type="text" className="form-control" id="apellidos" />
          </div>
          <div className="form-group">
            <label htmlFor="fecha pl-3">Fecha de nacimiento:</label>
            <input type="date" className="form-control" id="fecha" />
            <label>Años</label>
          </div>
          <div className="form-group">
            <label htmlFor="correo pl-3">Correo electrónico:</label>
            <input type="email" className="form-control" id="correo" />
          </div>
        </form>
      </>
    )
  );
};
