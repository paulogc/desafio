import attack from './gameUtils';

import { INITIAL_STATE } from '../reducers/game';
import { PLAYER_ONE_ID } from '../constants/playersId';

const PAYLOAD = {
  playerId: PLAYER_ONE_ID,
  lostPoints: 20,
};

const UPDATED_STATE = {
  ids: INITIAL_STATE.ids,
  content: {
    ...INITIAL_STATE.content,
    [PLAYER_ONE_ID]: { life: 80, name: 'Naruto' },
  },
};

describe('game utils', () => {
  describe('on attack', () => {
    it('should return updated state', () => {
      expect(attack(INITIAL_STATE, PAYLOAD)).toEqual(UPDATED_STATE);
    });
  });
});
