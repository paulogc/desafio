export default function attack(state, payload) {
  const { playerId, lostPoints } = payload;
  const playerLife = state[playerId].life;

  return {
    ...state,
    [playerId]: {
      life: playerLife - lostPoints,
    },
  };
}
