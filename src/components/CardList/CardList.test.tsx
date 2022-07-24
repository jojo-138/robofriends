import CardList from "./CardList";
import { renderWithProviders } from '../../test-utils';
import { screen } from "@testing-library/react";
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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

describe('CardList Component', () => {
  test('successfully fetches robots after render', async () => {
    renderWithProviders(<CardList />);

    expect(screen.getByText(/fetching robofriends/i)).toBeInTheDocument();

    await screen.findAllByRole('heading');

    expect(screen.getByText('john')).toBeInTheDocument();
    expect(screen.getByText('peter')).toBeInTheDocument();
    expect(screen.queryByTestId('card-list')).not.toHaveTextContent(/fetching robofriends/i);
  });
});