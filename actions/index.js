import * as types from './constants';

export const loginRequest = payload => ({
  type: types.DO_LOGIN_REQUEST,
  payload
})

export const loginSuccess = payload => ({
  type: types.DO_LOGIN_SUCCESS,
  payload
})

export const loginFailure = payload => ({
  type: types.DO_LOGIN_FAILURE,
  payload
})

export const signupRequest = payload => ({
  type: types.DO_SIGNUP_REQUEST,
  payload
})

export const signupSuccess = payload => ({
  type: types.DO_SIGNUP_SUCCESS,
  payload
})

export const signupFailure = payload => ({
  type: types.DO_SIGNUP_FAILURE,
  payload
})

export const forgotPasswordRequest = payload => ({
  type: types.ON_FORGOT_PASSWORD_REQUEST,
  payload
})

export const forgotPasswordSuccess = payload => ({
  type: types.ON_FORGOT_PASSWORD_SUCCESS,
  payload
})

export const forgotPasswordFailure = payload => ({
  type: types.ON_FORGOT_PASSWORD_FAILURE,
  payload
})

export const resetPasswordRequest = payload => ({
  type: types.ON_RESET_PASSWORD_REQUEST,
  payload
})

export const resetPasswordSuccess = payload => ({
  type: types.ON_RESET_PASSWORD_SUCCESS,
  payload
})

export const resetPasswordFailure = payload => ({
  type: types.ON_RESET_PASSWORD_FAILURE,
  payload
})

export const doModalOpen = payload => ({
  type: types.DO_MODAL_OPEN,
  payload
})

export const doModalClose = payload => ({
  type: types.DO_MODAL_CLOSE,
  payload
})

export const getUserRequest = () => ({
  type: types.GET_USER_REQUEST
})

export const getUserSuccess = payload => ({
  type: types.GET_USER_SUCCESS,
  payload
})

export const getUserFailure = payload => ({
  type: types.GET_USER_FAILURE,
  payload
})

export const updateProfileRequest = payload => ({
  type: types.UPDATE_PROFILE_REQUEST,
  payload
})

export const updateProfileSuccess = payload => ({
  type: types.UPDATE_PROFILE_SUCCESS,
  payload
})

export const updateProfileFailure = payload => ({
  type: types.UPDATE_PROFILE_FAILURE,
  payload
})

export const onLogoutRequest = () => ({
  type: types.ON_USER_LOGOUT_REQUEST
})

export const onLogoutSuccess = () => ({
  type: types.ON_USER_LOGOUT_SUCCESS
})

export const onVerifyAccountRequest = payload => ({
  type: types.ON_VERIFY_ACCOUNT_REQUEST,
  payload
})

export const onVerifyAccountSuccess = payload => ({
  type: types.ON_VERIFY_ACCOUNT_SUCCESS,
  payload
})

export const onVerifyAccountFailure = payload => ({
  type: types.ON_VERIFY_ACCOUNT_FAILURE,
  payload
})

export const getCoupansRequest = () => ({
  type: types.GET_COUPANS_REQUEST
})

export const getCoupansSuccess = payload => ({
  type: types.GET_COUPANS_SUCCESS,
  payload
})

export const getCoupansFailure = () => ({
  type: types.GET_COUPANS_FAILURE
})

export const getCompetitionsRequest = () => ({
  type: types.GET_COMPETITIONS_REQUEST
})

export const getCompetitionsSuccess = payload => ({
  type: types.GET_COMPETITIONS_SUCCESS,
  payload
})

export const getCompetitionsFailure = () => ({
  type: types.GET_COMPETITIONS_FAILURE
})

export const createContactRequest = payload => ({
  type: types.POST_CONTACT_US_REQUEST,
  payload
})

export const createContactSuccess = () => ({
  type: types.POST_CONTACT_US_SUCCESS
})

export const createContactFailure = () => ({
  type: types.POST_CONTACT_US_FAILURE
})