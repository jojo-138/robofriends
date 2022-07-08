import { 
  CHANGE_SEARCH_FIELD, 
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from "../constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const fetchRobots = () => (dispatch) => {
  dispatch({ type: FETCH_ROBOTS_PENDING });
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: FETCH_ROBOTS_FAILED, payload: err}))
}