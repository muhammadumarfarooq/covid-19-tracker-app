import './styles/card.css';
import { Grid } from "@material-ui/core";

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
    <Grid item md={3}>
      <div style={{ backgroundColor: containerBackgroundColor }} className="card">
        <div className="card--text-box">
          <p style={{ color: textColor }} className="card--text">{text}</p>
          <p style={{ color: numberColor }} className="card--number">{number}</p>
        </div>
        <img className="card--img" src={iconImg} alt="card-img"/>
      </div>
    </Grid>
  );
};

Card.propTypes = {};

export default Card;
