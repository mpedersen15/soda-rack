import { createStore } from 'redux';
import { stationApp } from '../reducers';

export const store = createStore(stationApp);