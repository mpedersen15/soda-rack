import { addFlavor, addStation, updateStation } from '../actions';

describe('Action generator tests', () => {

  describe('addFlavor', () => {
    it('should return the correct addFlavor action', () => {
      const expectedAction = {
        type: 'ADD_FLAVOR',
        flavor: 'Coke'
      };
  
      expect(addFlavor('Coke')).toEqual(expectedAction);
    });
    
  });

  describe('addStation', () => {
    it('should return the correct addStation action', () => {
      const newStation = {
        id: 0,
        name: 'Station 1',
        flavors: []
      };

      const stationAction = {
        type: 'ADD_STATION',
        station: newStation
      };
  
      expect(addStation(newStation)).toEqual(stationAction);
    });
    
  });

  describe('updateStation', () => {
    it('should return the correct updateStation action', () => {
      const expectedAction = {
        type: 'UPDATE_STATION',
        stationId: 1,
        flavorId: 2
      };

      expect(updateStation(expectedAction.stationId, expectedAction.flavorId)).toEqual(expectedAction);
    });
  });

});