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
    },
    {
        id: 3,
        name: 'Mountain Dew'
    }
];

const initialStations = [
    {
        id: 1,
        name: 'Station 1',
        flavors: [1, 2]
    },
    {
        id: 2,
        name: 'Station 2',
        flavors: []
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
