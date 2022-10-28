import { render, screen } from "@testing-library/react";
import Button from "./Button";

it('should render the button', () => {
    //ARRANGE
    render(<Button />);

    //ACT
    const button = screen.getByRole('button');
    const text = screen.getByText('More info...');

    //ASSERT
    expect(button).toBeInTheDocument();
    expect(text).toBeTruthy();

});