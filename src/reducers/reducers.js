import { ADD_FLAVOR, ADD_STATION } from "../actions/actions";


const flavorsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_FLAVOR:
            return  [...state.flavors, action.flavor];
        default: 
            return state;
}

const stationsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_STATION:
            return [...state.stations, action.station];
        case UPDATE_STATION:
            return  state.stations.map((station, index) => {
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

const stationApp = combineReducers({
    flavors: flavorsReducer,
    stations: stationsReducer
});
