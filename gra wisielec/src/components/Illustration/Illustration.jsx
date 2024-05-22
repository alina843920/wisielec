import PropTypes from "prop-types";
import "./Illustration.scss";

const Illustration = ({ mistakes }) => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
  ];

  return (
    <div className="illustration">
      <img src={images[mistakes]} alt={`Hangman stage ${mistakes}`} />
    </div>
  );
};

Illustration.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default Illustration;
