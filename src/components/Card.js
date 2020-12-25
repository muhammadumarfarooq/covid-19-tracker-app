import './styles/card.css';
import confirmedImg from '../assets/infected-img.png';

const Card = () => {
  
  return (
    <div className="card">
      <div className="card--text-box">
        <p className="card--text">Confirmed Cases</p>
        <p className="card--number">467,222</p>
      </div>
      <img className="card--img" src={confirmedImg} alt="card-img"/>
    </div>
  );
};

Card.propTypes = {};

export default Card;
