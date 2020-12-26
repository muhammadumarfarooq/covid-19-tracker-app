import './styles/cards.css';
import Card from "./Card";
import infectedImg from "../assets/infected-img.png";
import recoveredImg from "../assets/recover-img.png";
import deathsImg from "../assets/death-img.png";
import { Grid } from "@material-ui/core";

const Cards = () => {
  
  return (
    <Grid className="cards" container spacing={3} justify="center">
      
      <Card containerBackgroundColor="rgb(255, 236, 179)" textColor="#1e88e5" numberColor="#1e88e5" text="Infected"
            number={"467, 222"} iconImg={infectedImg}/>
      <Card containerBackgroundColor="rgb(251, 242, 233)" textColor="#f4511e" numberColor="#f4511e" text="Recovered"
            number={"418, 958"} iconImg={recoveredImg}/>
      <Card containerBackgroundColor="rgb(244, 199, 195)" textColor="#ff0000" numberColor="#ff0000" text="Deaths"
            number={"9753"}
            iconImg={deathsImg}/>
    
    </Grid>
  );
};

Cards.propTypes = {};

export default Cards;
