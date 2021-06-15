import "bootstrap/dist/css/bootstrap.min.css";
import { Botones } from "./componentes/Botones";
import { Paso1 } from "./componentes/Paso1";
import { Paso2 } from "./componentes/Paso2";
import { Paso3 } from "./componentes/Paso3";
import { Resumen } from "./componentes/Resumen";
import { Titulo } from "./componentes/Titulo";
function App() {
  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-12">
          <Titulo titulo="Datos Personales" />
          <form>
            <Paso1 />
            <Paso2 />
            <Paso3 />
            <Resumen />
            <Botones />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
