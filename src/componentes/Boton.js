export const Boton = (props) => {
  const { texto, desactivado, accion } = props;
  return (
    <button
      className="btn btn-primary mx-2"
      disabled={desactivado}
      onClick={accion}
    >
      {texto}
    </button>
  );
};
