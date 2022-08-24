import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import * as types from '../actions/constants';
import  BookMyDealApi from '../helpers/api';
import https from '../config/request';

export function *doSignupUser(action) {
  try {
    const { status, data } = yield call(BookMyDealApi.create,"/api/register", action.payload);
    if(status === 200) {
      yield put({ type: types.DO_SIGNUP_SUCCESS });
      yield put({ type: types.DO_MODAL_CLOSE, payload: { modalIsOpen: false, type: '' }});
      toast.success(data.message);
    }
  } catch(e) {
    const {response: { data }} = Object.assign({}, e);
    data.errors.forEach(error => toast.error(error.msg));
    yield put({ type: types.DO_LOGIN_FAILURE, payload: data })
  }
} 

export function *doLoginUser(action) {
  try {
    const { status, data } = yield call(BookMyDealApi.create,"/api/login", action.payload);
    if(status === 200) {
      window.localStorage.setItem("token", data.token);
      yield put({ type: types.DO_LOGIN_SUCCESS, payload: data });
      yield put({ type: types.DO_MODAL_CLOSE, payload: { modalIsOpen: false, type: '' }});
      yield put(push('/dashboard'));
      toast.success(data.message);
    }
  } catch(e) {
    const {response: { data }} = Object.assign({}, e);
    data.errors.forEach(error => toast.error(error.msg));
    yield put({ type: types.DO_LOGIN_FAILURE, payload: data })
  }
}

export function *doForgotPassword(action) {
  try {
    const { status, data } = yield call(BookMyDealApi.create,"/api/reset-password", action.payload);
    if(status === 200) {
      window.localStorage.setItem("linktoken", data.linktoken);
      yield put({ type: types.ON_FORGOT_PASSWORD_SUCCESS, payload: data })
      toast.success(data.message);
    }
  } catch(e) {
    const error = Object.assign({}, e);
    toast.error(error.response.data.message);
    yield put({ type: types.ON_FORGOT_PASSWORD_FAILURE, payload: error.response.data })
  }
}

export function *doResetPassword(action) {
  try {
    https.defaults.headers.common['linktoken'] = window.localStorage.getItem('linktoken');
    const { status, data } = yield call(BookMyDealApi.create,"/api/login", action.payload);
    if(status === 200) {
      yield put({ type: types.ON_RESET_PASSWORD_SUCCESS, payload: data })
      window.localStorage.setItem("token", data.token);
      window.localStorage.removeItem('linktoken');
      yield put({ type: types.DO_MODAL_CLOSE, payload: { modalIsOpen: false, type: '' }});
      yield put(push('/dashboard'));
      toast.success(data.message);
    }
  } catch(e) {
    const error = Object.assign({}, e);
    toast.error(error.response.data.message);
    yield put({ type: types.ON_RESET_PASSWORD_FAILURE, payload: error.response.data })
  }
}

export function *getUser() {
  try {
    https.defaults.headers.common['authorization'] = `Bearer ${window.localStorage.getItem('token')}`;
    const { status, data } = yield call(BookMyDealApi.fetch,"/api/user");
    if(status === 200) {
      yield put({ type: types.GET_USER_SUCCESS, payload: data })
    }
  } catch(e) {
    const error = Object.assign({}, e);
    toast.error(error.response.data.message);
    yield put({ type: types.ON_RESET_PASSWORD_FAILURE, payload: error.response.data })
  }
}

export function *updateProfile(action) {
  try {
    https.defaults.headers.common['authorization'] = `Bearer ${window.localStorage.getItem('token')}`;
    const { status, data } = yield call(BookMyDealApi.modify,"/api/user/profile/edit", action.payload);
    if(status === 200) {
      yield put({ type: types.UPDATE_PROFILE_SUCCESS, payload: data })
      toast.success(data.message);
    }
  } catch(e) {
    const error = Object.assign({}, e);
    toast.error(error.response.data.message);
    yield put({ type: types.UPDATE_PROFILE_FAILURE, payload: error.response.data })
  }
}

export function *doLogoutUser() {
  window.localStorage.removeItem('token');
  toast.success("User Logged Out Successfully");
  yield put({ type: types.ON_USER_LOGOUT_SUCCESS })
  yield put(push('/'));
}

export function *doVerifyAccount(action) {
  try {
    https.defaults.headers.common['accountverifytoken'] = action.payload.token;
    const { status, data } = yield call(BookMyDealApi.create,"/api/login", {});
    if(status === 200) {
      window.localStorage.setItem("token", data.token);
      yield put({ type: types.ON_VERIFY_ACCOUNT_SUCCESS, payload: data });
      yield put(push('/dashboard'));
      toast.success(data.message);
    }
  } catch(e) {
    const {response: { data }} = Object.assign({}, e);
    data.errors.forEach(error => toast.error(error.msg));
    yield put({ type: types.ON_VERIFY_ACCOUNT_FAILURE, payload: data })
  }
}

export function *getCoupans() {
  try {
    const { status, data } = yield call(BookMyDealApi.fetch,"/api/coupans");
    if(status === 200) {
      yield put({ type: types.GET_COUPANS_SUCCESS, payload: data })
    }
  } catch(e) {
    const response = Object.assign({}, e);
    toast.error(response.data.message);
  }
}

export function *getCompetitions() {
  try {
    const { status, data } = yield call(BookMyDealApi.fetch,"/api/competitions");
    if(status === 200) {
      yield put({ type: types.GET_COMPETITIONS_SUCCESS, payload: data })
    }
  } catch(e) {
    const response = Object.assign({}, e);
    toast.error(response.data.message);
  }
}

export function *createContact(action) {
  try {
    const { status, data } = yield call(BookMyDealApi.create,"/api/contact-us", action.payload);
    if(status === 200) {
      yield put({ type: types.POST_CONTACT_US_SUCCESS })
      toast.success(data.message);
    }
  } catch(e) {
    const response = Object.assign({}, e);
    toast.error(response.data.message);
  }
}