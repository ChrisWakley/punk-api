import React, { useState } from 'react';
import "./BeerCard.scss";
import Button from '../Button/Button';
import BlackCross from '../../assets/images/black-cross.png';

const BeerCard = ({image, name, tagline, description, brewed, abv, ph}) => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(!showText);
    };

    const cardFaceJSX = (
        <div className="beer-card__content beer-card__content--face">
        <img src={image} alt={name} className="beer-card__image"/>
                <h1 className="beer-card__name"> {name}</h1>
                <div className="beer-card__info">
                    <p className="beer-card__text">{tagline}</p>
                    <div className="beer-card__button" onClick={handleClick}>
                        <Button />
                    </div>
                </div>
        </div>
    );

    const cardTextJSX = (
        <div className='beer-card__content beer-card__content--text'>
            <img
                src={BlackCross}
                className="beer-card__cross"
                onClick={handleClick}
                alt="Close text"
            />
            <h1 className="beer-card__name"> {name}</h1>
                <div>
                    <p className="beer-card__text">{description}</p>
                    <p className="beer-card__text">Date first brewed: {brewed}</p>
                    <p className="beer-card__text">ABV percentage: {abv}</p>
                    <p className="beer-card__text">Acidity in Ph: {ph}</p>
                </div>
        </div>
    )

    return ( 
    <div className="beer-card">
        {showText ? cardTextJSX : cardFaceJSX}
    </div>
    );
};

export default BeerCard;