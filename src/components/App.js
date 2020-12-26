import './styles/app.css';
import Navbar from "./Navbar";
import Cards from "./Cards";
import CountrySelect from "./CountrySelect";
import { useEffect, useState } from "react";
import { fetchData } from "../api";
import ChartComponent from "./ChartComponent";

function App() {
  const [state, setState] = useState({ data: {}, country: "United States" });
  const { data, country } = state;
  useEffect(() => {
    const dataFetching = async () => {
      const data = await fetchData();
      setState({ ...state, data });
    };
    dataFetching();
  }, []);
  
  const handleCountryChange = async (e) => {
    const country = e.target.value;
    const data = await fetchData(country);
    setState({ data, country });
  };
  
  return (
    <div className="App">
      <Navbar/>
      <h1>Covid 19 App</h1>
      <Cards data={data}/>
      <CountrySelect handleCountryChange={handleCountryChange} selectedCountry={country}/>
      <ChartComponent data={data} country={country}/>
    </div>
  );
}

export default App;
