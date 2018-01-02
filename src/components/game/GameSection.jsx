import React from 'react';
import { connect } from 'react-redux';

import { attack } from '../../actions/gameActions';

export const GameSection = (props) => {
  console.log(props);
  return (
    <div>Game Section</div>
  );
};

export default connect(
  ({ game }) => ({ game }),
  {
    onAttack: attack,
  },
)(GameSection);
