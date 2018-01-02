import { ATTACK, RESET } from '../actions/gameActions';
import { PLAYER_ONE_ID, PLAYER_TWO_ID } from '../constants/playersId';

import { game, INITIAL_STATE } from './game';

const MOCKED_STATE = {
  [PLAYER_ONE_ID]: {
    life: 80,
  },
  [PLAYER_TWO_ID]: {
    life: 100,
  },
};

describe('game reducer', () => {
  let action;

  beforeEach(() => {
    action = {};
  });

  describe('given no previous state', () => {
    it('should return initial state', () => {
      expect(game(undefined, action)).toEqual(INITIAL_STATE);
    });

    it('should return current state when its defined', () => {
      expect(game(MOCKED_STATE, action)).toEqual(MOCKED_STATE);
    });
  });

  describe(`when action type is ${ATTACK}`, () => {
    beforeEach(() => {
      action = {
        type: ATTACK,
        payload: {
          playerId: PLAYER_ONE_ID,
          lostPoints: 20,
        },
      };
    });

    describe('given no previous state', () => {
      it('should update state removing point for player one', () => {
        expect(game(undefined, action)).toEqual(MOCKED_STATE);
      });
    });
  });
});
