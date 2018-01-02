import attack from '../utils/gameUtils';
import { ATTACK, RESET } from '../actions/gameActions';
import { PLAYER_ONE_ID, PLAYER_TWO_ID } from '../constants/playersId';

export const INITIAL_STATE = {
  [PLAYER_ONE_ID]: {
    life: 100,
  },
  [PLAYER_TWO_ID]: {
    life: 100,
  },
};

export default function game(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ATTACK: {
      return attack(state, action.payload);
    }
    case RESET: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}

