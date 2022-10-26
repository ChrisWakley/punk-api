import React from 'react';
import "./BeerContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";


const BeerContainer = ({ beers }) => {
    const cards = beers.map((beer) => {
        return (
        <BeerCard
            key = {beer.id}
            beer = {beer}
            image = {beer.image_url}
            name = {beer.name}
            tagline = {beer.tagline}
            // description = {beer.description}
            brewed = {beer.first_brewed}
            abv = {beer.abv}
            ph = {beer.ph}
            />
            )
    })
    
    return (
    <>
    <div className="beer-container">
        {cards}
    </div>
    </>
    );
};

export default BeerContainer;