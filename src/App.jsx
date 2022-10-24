import './App.scss';
import Nav from "./containers/Nav/Nav";
import BeerCard from './components/BeerCard/BeerCard';
// import BeerContainer from './containers/BeerContainer/BeerContainer';
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className='App__title'>
        <h1 className='App__title--text'>Punk API in React</h1>
      </div>
      <div className='App__container'>
        <Nav />
        <section className='App__card-container'>
          <BeerCard />
        </section>
      </div>
    </div>
  );
}

export default App;