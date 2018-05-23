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

});