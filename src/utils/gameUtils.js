export default function attack(state, payload) {
  const { playerId, lostPoints } = payload;
  const { ids, content } = state;
  const playerLife = content[playerId].life;
  const playerName = content[playerId].name;

  return {
    ids,
    content: {
      ...content,
      [playerId]: {
        name: playerName,
        life: playerLife - lostPoints,
      },
    },
  };
}
