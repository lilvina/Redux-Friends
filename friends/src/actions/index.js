import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const fetchFriends = cred => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START })
  return axios.post('http://localhost:5000/api/login', cred)
    .then((res) => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: "FETCH_FRIENDS_SUCCESS", payload: res.data.payload })
    })
    .catch((err) => {
      dispatch({ type: "FETCH_FRIENDS_FAILURE", payload: err.message })
    })
}
