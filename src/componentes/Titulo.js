import PropTypes from "prop-types";
export const Titulo = (props) => {
  const { titulo } = props;
  return <h1 className="text-center">{titulo}</h1>;
};
Titulo.propTypes = {
  titulo: PropTypes.string.isRequired,
};
