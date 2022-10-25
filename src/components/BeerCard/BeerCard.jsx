import React from 'react';
import "./BeerCard.scss";

const BeerCard = ({image, name, tagline, description, brewed, abv, ph}) => {
    return ( 
    <div className="beer-card">
        <img src={image} alt={name} className="beer-card__image"/>
            <h1 className="beer-card__name"> {name}</h1>
            <div className="beer-card__info">
                <p className="beer-card__text">{tagline}</p>
                {/* <p className="beer-card__text">{description}</p> */}
                <p className="beer-card__text">Date first brewed: {brewed}</p>
                <p className="beer-card__text">ABV percentage: {abv}</p>
                <p className="beer-card__text">Acidity in Ph: {ph}</p>
            </div>
    </div>
    )
};

export default BeerCard;