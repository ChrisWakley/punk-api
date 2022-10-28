import { render, screen, fireEvent } from "@testing-library/react";
import CheckBoxes from "./CheckBox";

it('should render the CheckBoxes', () => {
    //ARRANGE
    render(<CheckBoxes />);

    //ACT
    const checkboxes = screen.getAllByRole('checkbox');

    //ASSERT
    expect(checkboxes).toBeTruthy();

});

it('should render the input fields', () => {
    //ARRANGE
    render(<CheckBoxes />);

    //ACT
    const inputs = screen.getAllByRole('checkbox');

    //ASSERT
    inputs.forEach(input => {
        expect(input).toBeInTheDocument();
    });
});

it('should check that the correct checkbox is checked on user click', () => {
    //ARRANGE
    render(<CheckBoxes />);

    //ACT
    const abv = screen.getByPlaceholderText('ABV');
    const classic = screen.getByPlaceholderText('Classic Range');
    const ph = screen.getByPlaceholderText('PH');

    fireEvent.click(abv, {target: {value: "highABV"}});
    fireEvent.click(classic, {target: {value: "Classic"}});
    fireEvent.click(ph, {target: {value: "PH"}});

    //ASSERT
    expect(abv).toBeTruthy();
    expect(classic).toBeTruthy();
    expect(ph).toBeTruthy();
});