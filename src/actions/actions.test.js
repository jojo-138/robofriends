import { setSearchField, fetchRobots } from "./actions";
import { 
  CHANGE_SEARCH_FIELD, 
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from "../constants";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req,res,ctx) => {
    return res.once(
      ctx.status(102)
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/users', (req,res,ctx) => {
    return res.once(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
      })
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/users', (req,res,ctx) => {
    return res.once(
      ctx.status(500)
    )
  })
);

describe('fetchRobots action', () => {
  const middleware = [thunk];
  const mockStore = configureStore(middleware)
  const store = mockStore({
    robots: {
      robots: [],
      isPending: false,
      fetchError: null
    }
  });

  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    store.clearActions();
  });
  afterAll(() => server.close());

  test('fetchRobots outputs FETCH_ROBOTS_PENDING object', () => {
    expect.assertions(1);
    store.dispatch(fetchRobots())
    const action = store.getActions();
    expect(action[0].type).toEqual(FETCH_ROBOTS_PENDING)
  })

  test('fetchRobots outputs FETCH_ROBOTS_SUCCESS object', async () => {
    expect.assertions(1);
    const expectedAction = {
      type: FETCH_ROBOTS_SUCCESS,
      payload: {
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
      }
    }
    return store.dispatch(fetchRobots()).then(data => {
      expect(data).toEqual(expectedAction);
    })
  })
  
  test('fetchRobots outputs FETCH_ROBOTS_FAILED object', async () => {
    expect.assertions(1);
    return store.dispatch(fetchRobots()).then(err => {
      expect(err.type).toEqual(FETCH_ROBOTS_FAILED);
    })
  })
})

describe('setSearchField action', () => {
  test('setSearchField outputs correct object', () => {
    expect(setSearchField('abc')).toEqual({ type: CHANGE_SEARCH_FIELD, payload: 'abc'})
  })
})
