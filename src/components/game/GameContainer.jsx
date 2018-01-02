import React from 'react';
import { connect } from 'react-redux';

import { reset } from '../../actions/gameActions';

import GameSection from './GameSection';

import { PLAYER_ONE_ID, PLAYER_TWO_ID } from '../../constants/playersId';

const GameContainer = (props) => {
  console.log(props);

  return (
    <div>
      <GameSection
        playerName="Naruto"
        playerId={PLAYER_ONE_ID}
      />
      <GameSection
        playerName="Sasuke"
        playerId={PLAYER_TWO_ID}
      />
    </div>
  );
};

export default connect(
  ({ game }) => ({ game }),
  {
    onReset: reset,
  },
)(GameContainer);
