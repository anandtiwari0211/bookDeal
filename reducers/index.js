import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import currentUser from './currentUser';
import Error from './error';
import Modal from './modal';
import Coupans from './coupans';
import Competitions from './competitions';

export default combineReducers({
  currentUser,
  Error,
  Modal,
  Coupans,
  Competitions,
  routing: routerReducer 
})