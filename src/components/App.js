import './styles/app.css';
import Cards from "./Cards";
import Navbar from "./Navbar";
import CountrySelect from "./CountrySelect";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Covid 19 App</h1>
      <Cards/>
      <CountrySelect/>
    </div>
  );
}

export default App;
