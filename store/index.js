import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { history } from '../routes/history'; 

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,routerMiddleware(history)));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;