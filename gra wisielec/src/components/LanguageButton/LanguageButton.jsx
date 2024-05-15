import PropTypes from "prop-types";

const LanguageButton = ({ Language }) => {
  const handleClick = () => {
    Language();
  };

  return <button onClick={handleClick}>Language</button>;
};

LanguageButton.propTypes = {
  Language: PropTypes.func.isRequired,
};

export default LanguageButton;
