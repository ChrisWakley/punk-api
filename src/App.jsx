import './App.scss';
import Nav from "./containers/Nav/Nav";
// import beers from "./data/data.js";
import Beers from './containers/BeerContainer/BeerContainer';
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  const [beer, setBeer] = useState();

  const url = `https://api.punkapi.com/v2/beers?`;

  const getBeer = async () => {  
    const res = await fetch(url);
    const data = await res.json();
    setBeer(data.results);
  };

  getBeer();

  return (
    <div className="App">
      <div className='App__title'>
        <h1 className='App__title--text'>Punk API in React</h1>
      </div>
      <div className='App__container'>
        <Nav />
        <section className='App__card-container'>
          <Beers beers={beer}/>
        </section>
      </div>
    </div>
  );
}

export default App;