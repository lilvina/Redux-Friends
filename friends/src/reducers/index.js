import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from '../actions';


const initialState = {
  err: '',
  friends: [],
  isLoggedIn: false,
  waiting: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isLoggedIn: true
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        waiting: false
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        waiting: false,
        err: action.payload
      }
    default:
      return state
  }
}

export default reducer
