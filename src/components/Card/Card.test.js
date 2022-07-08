import Card from "./Card";
import { render } from '@testing-library/react'

describe('Card component', () => {
  test('renders correctly', () => {
    expect(render(<Card id='123' name='john' email='john@gmail.com' />)).toMatchSnapshot();
  })
})