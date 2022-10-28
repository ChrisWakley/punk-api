import { render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard.jsx";
import beers from "../../data/data.js"
import userEvent from "@testing-library/user-event";

it('should render the BeerContainer', () => {
    //ARRANGE
    render(<BeerCard image = {"image"} name = {"beername"} tagline = {"sloganhere"} />);

    //ACT
    const beerImage = screen.getByRole('img')
    const beerName = screen.getByText('beername');
    const beerTagLine = screen.getByText('sloganhere')

    //ASSERT
    expect(beerImage).toHaveAttribute('src', 'image');
    expect(beerName).toBeInTheDocument();
    expect(beerTagLine).toBeInTheDocument();
});

it('should display more info when more info button is clicked', () => {
    //ARRANGE
    render(<BeerCard image = {"image"} name = {"beername"} tagline = {"sloganhere"}
    description = {"longdescriptiongoeshere"} brewed = {"00/00/0000"}
    abv = {"0.0"} ph = {"0.0"}/>)

    //ACT
    const button = screen.getByRole('button', {name: /more info.../i});
    userEvent.click(button);
    const description = screen.getByText('longdescriptiongoeshere');
    const brewed = screen.getByText('Date first brewed: 00/00/0000');
    const abv = screen.getByText('ABV percentage: 0.0');
    const ph = screen.getByText('ABV percentage: 0.0');

    //ASSERT
    const success = [description, brewed, abv, ph];

    expect(success).toBeTruthy();
});