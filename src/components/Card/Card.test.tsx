import Card from "./Card";
import { render, screen } from '@testing-library/react';

describe('Card component', () => {
  test('renders correctly', () => {
    expect(render(<Card id={123} name='john' email='john@gmail.com' />)).toMatchSnapshot();
  });
  
  test('renders correctly with empty props', () => {
    render(<Card id={undefined} name='' email='' />);
    
    expect(screen.getByRole('heading')).toBeEmptyDOMElement();
  });
});