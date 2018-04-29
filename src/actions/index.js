export const ADD_FLAVOR = 'ADD_FLAVOR';
export const ADD_STATION = 'ADD_STATION';
export const UPDATE_STATION = 'UPDATE_STATION'; 

export const addFlavor = (flavor) => {
    return {
        type: ADD_FLAVOR,
        flavor
    };
}

export function addStation(station) {
    return {
        type: ADD_STATION,
        station
    };
}

export function updateStation(stationId, flavorId) {
    // console.log('Updating station', stationId, ' with ', flavorId);
    return {
        type: UPDATE_STATION,
        stationId,
        flavorId
    };
}
