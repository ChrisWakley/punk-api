import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

it('should render the searchbar', () => {
    //ARRANGE
    render(<SearchBar />);

    //ACT
    const searchbar = screen.getByRole('textbox');

    //ASSERT
    expect(searchbar).toBeInTheDocument();

})

it('should render the input field', () => {
    //ARRANGE
    render(<SearchBar />);

    //ACT
    const inputfield = screen.getByRole('textbox', {search: /search/i});

    //ASSERT
    expect(inputfield).toBeInTheDocument();

})