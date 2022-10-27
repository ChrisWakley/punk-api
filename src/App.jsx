import './App.scss';
// import Nav from "./containers/Nav/Nav";
import NavMenu from './components/NavMenu/NavMenu';
import BeerContainer from './containers/BeerContainer/BeerContainer';
import { useState, useEffect } from "react";

const App = () => {
  const [beers, setBeer] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [phChecked, SetPhChecked] = useState(false);

  const getBeer = async (filterABV) => { 
    const url = "https://api.punkapi.com/v2/beers?page=2&per_page=50";
    const res = await fetch(url);
    const data = await res.json();
    setBeer(data);
  };

  useEffect(() => {
    getBeer()
  }, []);

  useEffect(() => {
    if (phChecked) {
      setBeer(beers.filter(beer => beer.ph < 4))
    }
    if (searchTerm !== "") {
      setBeer(beers.filter(beer => beer.name.toLowerCase().includes(searchTerm)))
    }
    if (!phChecked & searchTerm === "") {
      getBeer();
    }
  }, [searchTerm, beers, phChecked]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleChange = () => {
    SetPhChecked(!phChecked);
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