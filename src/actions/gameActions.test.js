import { attack, reset, ATTACK, RESET } from './gameActions';
import { PLAYER_ONE_ID } from '../constants/playersId';

const LOST_POINTS = 10;

const MOCKED_ACTION = {
  playerId: PLAYER_ONE_ID,
  lostPoints: LOST_POINTS,
};

describe('game actions', () => {
  describe('on attack player', () => {
    it('should set empty string when player id is not given', () => {
      expect(attack({}).payload.playerId).toBe('');
    });

    it('should set 0 when lost points it is not given', () => {
      expect(attack({}).payload.lostPoints).toBe(0);
    });

    it('should set attacked player id on action payload', () => {
      expect(attack(MOCKED_ACTION).payload.playerId).toBe(PLAYER_ONE_ID);
    });

    it('should set lost points on action payload', () => {
      expect(attack(MOCKED_ACTION).payload.lostPoints).toBe(LOST_POINTS);
    });

    it(`should set action type ${ATTACK}`, () => {
      expect(attack(PLAYER_ONE_ID).type).toBe(ATTACK);
    });
  });

  describe('on reset', () => {
    it(`should set type ${RESET}`, () => {
      expect(reset(PLAYER_ONE_ID).type).toBe(RESET);
    });
  });
});
