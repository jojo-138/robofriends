import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe('SearchBar component', () => {
  test('renders correctly', () => {
    expect(render(<SearchBar />)).toMatchSnapshot();
  })

  test('handleChange prop is being called when user types', () => {
    const mockHandleChange = jest.fn();
    render(<SearchBar handleChange={mockHandleChange} />);
    expect(mockHandleChange).not.toHaveBeenCalled();
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'abc');
    expect(mockHandleChange).toHaveBeenCalledTimes(3);
  })
})