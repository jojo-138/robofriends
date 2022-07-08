import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardList Component', () => {
  const mockUsers = [
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
  ];
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    expect(renderer.render(<CardList users={mockUsers} input='' />)).toMatchSnapshot();
  })

  test('filters users correctly', () => {
    render(<CardList users={mockUsers} input='joa' />)
    const name = screen.getByRole('heading');
    expect(name).toHaveTextContent(/joana/i);
    expect(name).not.toHaveTextContent(/john/i);
  })
})