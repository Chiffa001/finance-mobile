import {getDateTime} from '../date';

describe('utils/date', () => {
  describe('getDateTime', () => {
    it('should return {date: 20.03.2023, time: 11:05}', () => {
      expect(getDateTime('2023-03-20T11:05:01.117Z', 'UTC')).toEqual({
        date: '20.03.2023',
        time: '11:05',
      });
    });
  });
});
