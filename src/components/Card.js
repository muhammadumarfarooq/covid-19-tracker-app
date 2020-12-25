import './styles/card.css';

const Card = (props) => {
  const {
    text,
    number,
    iconImg,
    containerBackgroundColor,
    textColor,
    numberColor
  } = props;
  return (
    <div style={{ backgroundColor: containerBackgroundColor }} className="card">
      <div className="card--text-box">
        <p style={{ color: textColor }} className="card--text">{text}</p>
        <p style={{ color: numberColor }} className="card--number">{number}</p>
      </div>
      <img className="card--img" src={iconImg} alt="card-img"/>
    </div>
  );
};

Card.propTypes = {};

export default Card;
