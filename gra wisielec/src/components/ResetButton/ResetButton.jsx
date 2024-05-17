import PropTypes from "prop-types";
import "./ResetButton.scss";

const ResetButton = ({ onClick }) => {
  return (
    <button className="reset-button" onClick={onClick}>
      Restart
    </button>
  );
};

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetButton;
