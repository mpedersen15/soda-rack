import { createStore } from 'redux';
import { stationApp } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(stationApp, composeWithDevTools());