import { 
  CHANGE_SEARCH_FIELD, 
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from "../constants";

const initialSearchState = {
  searchField: ''
}

export const searchRobots = (state = initialSearchState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

const initialRobotState = {
  robots: [],
  isPending: false,
  fetchError: null
}

export const getRobots = (state = initialRobotState, action = {}) => {
  switch(action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, robots: [], isPending: true, fetchError: null };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false, fetchError: null }
    case FETCH_ROBOTS_FAILED:
      return { ...state, robots: [], isPending: false, fetchError: action.payload }
    default:
      return state;
  }
}