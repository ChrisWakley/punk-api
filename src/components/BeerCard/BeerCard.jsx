import "./BeerCard.scss";
import beers from "../../data/data.js";

const BeerCard = (props) => {
    return <div className="beer-card">
        <img src={beers.image_url} alt="" className="beer-card__image"/>
            <h1 className="beer-card__name"> {beers.name}</h1>
            <div className="beer-card__info">
                <p className="beer-card__text">{beers.tagline}</p>
                <p className="beer-card__text">{beers.description}</p>
                <p className="beer-card__text">{beers.first_brewed}</p>
                <p className="beer-card__text">{beers.abv}</p>
                <p className="beer-card__text">{beers.ph}</p>
            </div>
    </div>
}

export default BeerCard;