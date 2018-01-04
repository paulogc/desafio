import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Button } from 'react-bootstrap';

import { attack } from '../../actions/gameActions';

import styles from './GameSection.css';

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

  const {
    attakButton,
    imgAvatar,
    lifeColorGreen,
    lifeColorYellow,
    lifeColorRed,
    playerSection,
    playerNameLabel,
    playerLife,
  } = styles;

  const handleAttack = () => onAttack({ playerId: enemy, lostPoints: LOST_POINTS });

  let colorClassName = lifeColorGreen;

  if (life <= 60) {
    colorClassName = lifeColorYellow;
  }

  if (life < 40) {
    colorClassName = lifeColorRed;
  }

  return (
    <div className={playerSection}>
      <img alt="" className={imgAvatar} src={avatar} />
      <div className={playerNameLabel} >{playerName}</div>
      <div className={attakButton}>
        <Button
          block
          bsStyle="primary"
          bsSize="large"
          onClick={handleAttack}
        >
          {attakLabel}
        </Button>
      </div>
      <div className={cx(playerLife, colorClassName)}>{life}%</div>
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
