import { Container } from "@material-ui/core";
import InputSelect from "./InputSelect";
import './styles/country-select.css';

const CountrySelect = () => {
  
  return (
    <Container className="country-select" maxWidth="md">
      <InputSelect value={""} name="inputSelect" handleChange={() => {
      }} id="input-select"
      label="Select Country"
      />
    </Container>
  
  );
};

CountrySelect.propTypes = {};

export default CountrySelect;
