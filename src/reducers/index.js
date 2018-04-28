import { combineReducers } from 'redux';
import { ADD_FLAVOR, ADD_STATION, UPDATE_STATION } from "../actions";

const initialFlavors = [
    {
        id: 1,
        name: 'Coke'
    },
    {
        id: 2,
        name: 'Pepsi'
    }
];

const initialStations = [
    {
        id: 1,
        name: 'Station 1'
    },
    {
        id: 2,
        name: 'Station 2'
    }
]

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
            return  state.map((station, index) => {
                    if (index === action.index) {
                        return {
                            ...station,
                            flavors: [...station.flavors, action.flavor]
                        };
                    }
                    return station;
                });
        default:
            return state;
    }
}

export const stationApp = combineReducers({
    flavors: flavorsReducer,
    stations: stationsReducer
});
