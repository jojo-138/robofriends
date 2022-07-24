import App from './App';
import { renderWithProviders } from "../../test-utils";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'john',
          email: 'john@gmail.com'
        },
        {
          id: 2,
          name: 'peter',
          email: 'peter@gmail.com'
        }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App component', () => {
  test('App renders correctly',() => {
    expect(renderWithProviders(<App />)).toMatchSnapshot();
  });
  
  test('robots filter correctly', async () => {
    renderWithProviders(<App />);

    await screen.findAllByRole('heading');

    userEvent.type(screen.getByRole('textbox'), 'john');

    expect(screen.getByText('john')).toBeInTheDocument();
    expect(screen.queryByText('peter')).not.toBeInTheDocument();
  });
});