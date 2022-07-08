import Main from "./Main";
import { render, screen } from "@testing-library/react";
import ShallowRenderer from 'react-test-renderer/shallow';
import userEvent from "@testing-library/user-event";

describe('Main container', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    expect(renderer.render(<Main />)).toMatchSnapshot();
  })

  test('onFetchRobots prop is called upon render and onSearchChange prop on when user types', () => {
    const mockOnFetchRobots = jest.fn();
    const mockOnSearchChange = jest.fn();
    const mockRobots = [
      {
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
      },
      {
        id: 2,
        name: 'joana',
        email: 'joana@gmail.com'
      }
    ]

    render(<Main onFetchRobots={mockOnFetchRobots} onSearchChange={mockOnSearchChange} robots={mockRobots} searchField='' />)
    expect(mockOnFetchRobots).toBeCalledTimes(1);
    expect(mockOnSearchChange).not.toBeCalled();

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'john');

    expect(mockOnSearchChange).toBeCalledTimes(4);
  })
})