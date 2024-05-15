import PropTypes from "prop-types";

const ThemeButton = ({ Theme }) => {
  const handleClick = () => {
    Theme();
  };

  return <button onClick={handleClick}>Theme</button>;
};

ThemeButton.propTypes = {
  Theme: PropTypes.func.isRequired,
};

export default ThemeButton;
