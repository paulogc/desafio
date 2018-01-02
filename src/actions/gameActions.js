export const ATTACK = 'ATTACK';
export const RESET = 'RESET';

export function attack({ playerId = '', lostPoints = 0 }) {
  return {
    type: ATTACK,
    payload: {
      playerId,
      lostPoints,
    },
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
