import * as types from '../actions/constants';

const initialState = {
  user: {},
  isLoggedIn: !!window.localStorage.getItem('token'),
  timestamp: new Date()
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case types.DO_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        timestamp: new Date()
      };
    case types.ON_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        timestamp: new Date()
      }
    case types.ON_VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      }
    case types.ON_USER_LOGOUT_SUCCESS:
      return {
        initialState
      }
    default:
    return state
  }
}

export default currentUser;