import PropTypes from "prop-types";
import "./LanguageButton.scss";

const LanguageButton = ({ onClick, currentLanguage }) => {
  const buttonText = currentLanguage === "en" ? "PL" : "EN";

  return (
    <button className="language-button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

LanguageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired,
};

export default LanguageButton;
