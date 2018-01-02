import attack from './gameUtils';

import { INITIAL_SATE } from '../reducers/game';
import { PLAYER_ONE_ID } from '../constants/playersId';

const PAYLOD = {
  playerId: PLAYER_ONE_ID,
  lostPoints: 20,
};

const UPDATED_STATE = {
  ...INITIAL_SATE,
  [PLAYER_ONE_ID]: {
    life: 80,
  },
};

describe('game utils', () => {
  describe('on attack', () => {
    it('should return updated state', () => {
      expect(attack(INITIAL_SATE, PAYLOD)).toEqual(UPDATED_STATE);
    });
  });
});
