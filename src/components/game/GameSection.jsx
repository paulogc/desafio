import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { attack } from '../../actions/gameActions';

const LOST_POINTS = 20;

export const GameSection = (props) => {
  const {
    attakLabel,
    avatar,
    life,
    playerName,
    enemy,
    onAttack,
  } = props;

  const handleAttack = () => onAttack({ playerId: enemy, lostPoints: LOST_POINTS });

  return (
    <div>
      <img alt="" src={avatar} />
      <div>{playerName}</div>
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={handleAttack}
      >
        {attakLabel}
      </Button>
      <div>{life}</div>
    </div>
  );
};

GameSection.propTypes = {
  attakLabel: PropTypes.string,
  avatar: PropTypes.string,
  life: PropTypes.number,
  enemy: PropTypes.string,
  playerName: PropTypes.string,
  onAttack: PropTypes.func.isRequired,
};

GameSection.defaultProps = {
  attakLabel: '',
  avatar: '',
  life: 0,
  enemy: '',
  playerName: '',
};

export default connect(
  ({ game }) => ({ game }),
  {
    onAttack: attack,
  },
)(GameSection);
