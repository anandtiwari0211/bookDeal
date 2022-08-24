import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/constants';
import {
  doSignupUser,
  doLoginUser,
  doForgotPassword,
  doResetPassword,
  getUser,
  updateProfile,
  doLogoutUser,
  doVerifyAccount,
  getCoupans,
  getCompetitions,
  createContact
} from './sagas';

export default function *watchAll() {
  yield all([
    yield takeLatest(types.DO_SIGNUP_REQUEST, doSignupUser),
    yield takeLatest(types.DO_LOGIN_REQUEST, doLoginUser),
    yield takeLatest(types.ON_FORGOT_PASSWORD_REQUEST, doForgotPassword),
    yield takeLatest(types.ON_RESET_PASSWORD_REQUEST, doResetPassword),
    yield takeLatest(types.GET_USER_REQUEST, getUser),
    yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile),
    yield takeLatest(types.ON_USER_LOGOUT_REQUEST, doLogoutUser),
    yield takeLatest(types.ON_VERIFY_ACCOUNT_REQUEST, doVerifyAccount),
    yield takeLatest(types.GET_COUPANS_REQUEST, getCoupans),
    yield takeLatest(types.GET_COMPETITIONS_REQUEST, getCompetitions),
    yield takeLatest(types.POST_CONTACT_US_REQUEST, createContact)
  ])
}