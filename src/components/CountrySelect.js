import { Container } from "@material-ui/core";
import InputSelect from "./InputSelect";
import './styles/country-select.css';
import { useEffect, useState } from "react";
import { fetchCountries } from "../api";

const CountrySelect = ({ selectedCountry, handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    
    fetchAPI();
  }, []);
  
  return (
    <Container className="country-select" maxWidth="md">
      <InputSelect isDisabled={!Boolean(countries.length)} value={selectedCountry} name="inputSelect"
                   handleChange={handleCountryChange}
                   id="input-select"
                   label="Select Country"
      >
        <option value="">United States</option>
        {countries.map((country, index) => <option key={String(index)} value={country}>{country}</option>)}
      </InputSelect>
    </Container>
  
  );
};

CountrySelect.propTypes = {};

export default CountrySelect;
