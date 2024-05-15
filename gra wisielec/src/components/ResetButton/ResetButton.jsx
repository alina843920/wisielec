import PropTypes from "prop-types";

const ResetButton = ({ resetGame }) => {
  return <button onClick={resetGame}>Reset</button>;
};

ResetButton.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default ResetButton;
