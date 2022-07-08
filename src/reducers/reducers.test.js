import { 
  CHANGE_SEARCH_FIELD, 
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from "../constants";
import { searchRobots, getRobots } from "./reducers";

describe('searchRobots reducer', () => {
  const initialState = {
    searchField: ''
  }
  test('returns initial state', () => {
    expect(searchRobots(undefined, {})).toEqual(initialState);
  })
  test('handles CHANGE_SEARCH_FIELD', () => {
    const mockAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: 'text'
    }
    const expectedOutput = {
      searchField: 'text'
    }
    expect(searchRobots(initialState, mockAction)).toEqual(expectedOutput);
  })
})

describe('getRobots reducer', () => {
  const initialState = {
    robots: [],
    isPending: false,
    fetchError: null
  }
  test('returns initial state', () => {
    expect(getRobots(undefined, {})).toEqual(initialState);
  })

  test('handles FETCH_ROBOTS_PENDING', () => {
    const mockAction = {
      type: FETCH_ROBOTS_PENDING
    }
    const expectedOutput = {
      robots: [],
      isPending: true,
      fetchError: null
    }
    expect(getRobots(initialState, mockAction)).toEqual(expectedOutput)
  })

  test('handles FETCH_ROBOTS_SUCCESS', () => {
    const mockAction = {
      type: FETCH_ROBOTS_SUCCESS,
      payload: [{
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
      }]
    }
    const expectedOutput = {
      robots: [{
        id: 1,
        name: 'john',
        email: 'john@gmail.com'
      }],
      isPending: false,
      fetchError: null
    }
    expect(getRobots(initialState, mockAction)).toEqual(expectedOutput)
  })

  test('handles FETCH_ROBOTS_FAILED', () => {
    const mockAction = {
      type: FETCH_ROBOTS_FAILED,
      payload: 'ERROR'
    }
    const expectedOutput = {
      robots: [],
      isPending: false,
      fetchError: 'ERROR'
    }
    expect(getRobots(initialState, mockAction)).toEqual(expectedOutput)
  })
})