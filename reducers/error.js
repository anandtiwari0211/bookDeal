import * as types from '../actions/constants';

const Error = (state = {}, action) => {
  switch (action.type) {
    case types.DO_LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case types.DO_SIGNUP_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
    return state
  }
}

export default Error;