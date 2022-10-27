import './App.scss';
// import Nav from "./containers/Nav/Nav";
import NavMenu from './components/NavMenu/NavMenu';
import BeerContainer from './containers/BeerContainer/BeerContainer';
import { useState, useEffect } from "react";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [phChecked, SetPhChecked] = useState(false);
  const [classicChecked, setClassicChecked] = useState(false);
  const [highAbvChecked, setHighAbvChecked] = useState(false);

  const getBeer = async () => { 
    const url = "https://api.punkapi.com/v2/beers?page=2&per_page=50";
    const res = await fetch(url);
    const data = await res.json();
    setFilteredBeers(data);
    setBeers(data);
  };

  useEffect(() => {
    getBeer()
  }, []);

  useEffect(() => {
    let filteredBeersList = filteredBeers;
    if (phChecked) {
      filteredBeersList = filteredBeersList.filter((beer) => beer.ph < 4);
    } 
    if (classicChecked) {
      filteredBeersList = filteredBeersList.filter((beer) => beer.first_brewed.slice(3) < 2010);
    }
    if (highAbvChecked) {
      filteredBeersList = filteredBeersList.filter((beer) => beer.abv > 6);
    }
    if (searchTerm !== "") {
      filteredBeersList = filteredBeersList.filter((beer) => beer.name.toLowerCase().includes(searchTerm));
    }
    setBeers(filteredBeersList);

    if (!phChecked & !classicChecked & !highAbvChecked & searchTerm === "") {
      getBeer();
    }}, [filteredBeers, searchTerm, phChecked, classicChecked, highAbvChecked]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleChange = (event) => {
    if (event.target.value === "PH") {
      SetPhChecked(!phChecked);
    }
    if (event.target.value === "highABV") {
      setHighAbvChecked(!highAbvChecked);
    }
    if (event.target.value === "Classic") {
      setClassicChecked(!classicChecked);
    }
  };

  return (
    <div className="App">
      <div className='App__title'>
        <h1 className='App__title--text'>Punk API in React</h1>
      </div>
      <div className='App__container'>
        <NavMenu beersArr={beers} 
        handleInput={handleInput} 
        label={"search"} 
        handleChange={handleChange} 
        />
        <section className='App__card-container'>
          <BeerContainer beers={beers}/>
        </section>
      </div>
    </div>
  );
}

export default App;