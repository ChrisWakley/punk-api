import './App.scss';
import Nav from "./containers/Nav/Nav";
// import beers from "./data/data.js";
import BeerContainer from './containers/BeerContainer/BeerContainer';
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  const [beer, setBeer] = useState([]);

  

  const getBeer = async () => { 
    const url = "https://api.punkapi.com/v2/beers"; 
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setBeer(data);
  };

  useEffect(() => {
    getBeer()
  }, []);

  return (
    <div className="App">
      <div className='App__title'>
        <h1 className='App__title--text'>Punk API in React</h1>
      </div>
      <div className='App__container'>
        <Nav />
        <section className='App__card-container'>
          <BeerContainer beers={beer}/>
        </section>
      </div>
    </div>
  );
}

export default App;