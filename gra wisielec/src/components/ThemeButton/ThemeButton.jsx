import PropTypes from "prop-types";
import "./ThemeButton.scss";

const ThemeButton = ({ onClick, currentTheme }) => {
  const buttonText = currentTheme === "light" ? "Dark" : "Light";

  return (
    <button className="theme-button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

ThemeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default ThemeButton;
