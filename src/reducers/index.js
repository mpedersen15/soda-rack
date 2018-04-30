import { combineReducers } from 'redux';
import { ADD_FLAVOR, ADD_STATION, UPDATE_STATION } from "../actions";

const initialFlavors = [];

const initialStations = [];

const flavorsReducer = (state = initialFlavors, action) => {
    switch(action.type) {
        case ADD_FLAVOR:
            return  [...state, action.flavor];
        default: 
            return state;
    }
}

const stationsReducer = (state = initialStations, action) => {
    switch(action.type) {
        case ADD_STATION:
            return [...state, action.station];
        case UPDATE_STATION:
            const newStations = state.map((station, index) => {
                if (station.id === action.stationId) {
                    return {
                        ...station,
                        flavors: [...station.flavors, action.flavorId]
                    };
                }
                return station;
            });

            return newStations;
        default:
            return state;
    }
}

export const stationApp = combineReducers({
    flavors: flavorsReducer,
    stations: stationsReducer
});
