import SearchBar from "./SearchBar";
import { renderWithProviders } from "../../test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('SearchBar component', () => {
  test('component renders correctly', () => {
    expect(renderWithProviders(<SearchBar />)).toMatchSnapshot();
  });

  test('dispatch is called and updates input state when user types', () => {
    renderWithProviders(<SearchBar />);

    const input = screen.getByRole('textbox');
    
    expect(input).toHaveAttribute('value', '');

    userEvent.type(input, 'john');
    expect(input).toHaveAttribute('value', 'john');
  });
});