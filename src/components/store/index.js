import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const moddleware = [thunk];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...moddleware))
);

export default store

