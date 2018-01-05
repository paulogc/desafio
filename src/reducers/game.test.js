import { ATTACK, RESET } from '../actions/gameActions';
import { PLAYER_ONE_ID, PLAYER_TWO_ID } from '../constants/playersId';

import game, { INITIAL_STATE } from './game';

const MOCKED_STATE = {
  ids: [PLAYER_ONE_ID, PLAYER_TWO_ID],
  content: {
    [PLAYER_ONE_ID]: {
      name: 'Naruto',
      life: 80,
    },
    [PLAYER_TWO_ID]: {
      name: 'Sasuke',
      life: 100,
    },
  },
};

const MOCKED_STATE_TWO = {
  ids: [PLAYER_ONE_ID, PLAYER_TWO_ID],
  content: {
    [PLAYER_ONE_ID]: {
      name: 'Naruto',
      life: 60,
    },
    [PLAYER_TWO_ID]: {
      name: 'Sasuke',
      life: 100,
    },
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
      it('should update state removing point from player one', () => {
        expect(game(undefined, action)).toEqual(MOCKED_STATE);
      });
    });
    describe('given previous state', () => {
      it('should update state removing point from player one', () => {
        expect(game(MOCKED_STATE, action)).toEqual(MOCKED_STATE_TWO);
      });
    });
  });

  describe(`when action type is ${RESET}`, () => {
    beforeEach(() => {
      action = {
        type: RESET,
      };
    });
    it('should return initial state', () => {
      expect(game(MOCKED_STATE, action)).toEqual(INITIAL_STATE);
    });
  });
});
