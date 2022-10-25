import React from 'react';
import "./BeerContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const Beers = (props) => {
    const {beersArray} = props;

    const beerDisplay = beersArray.map((beer, index) => (
        <BeerCard
        beer = {beer}
        image = {beer.image_url}
        name = {beer.name}
        tagline = {beer.tagline}
        description = {beer.description}
        brewed = {beer.first_brewed}
        abv = {beer.abv}
        ph = {beer.ph}
        key = {beer.name + ' ' + index}
        />
    ))

    return (
        <div className="beers">
            {beerDisplay}
        </div>
    )
}

export default Beers