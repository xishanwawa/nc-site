import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer }  from 'reducers'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();
export let store = createStore( rootReducer, initialState, applyMiddleware (thunkMiddleware));

