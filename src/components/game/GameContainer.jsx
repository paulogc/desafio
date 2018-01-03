import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Col, Grid, Row } from 'react-bootstrap';

import { reset } from '../../actions/gameActions';

import GameSection from './GameSection';
import Dialog from './Dialog';

import { PLAYER_ONE_ID, PLAYER_TWO_ID } from '../../constants/playersId';

import styles from './GameContainer.css';

class GameContainer extends Component {
  static propTypes = {
    game: PropTypes.shape({
      ids: PropTypes.array,
      content: PropTypes.object,
    }),
    onReset: PropTypes.func.isRequired,
  }

  static defaultProps = {
    game: {
      ids: [],
      content: {},
    },
  }

  state = { showDialog: false, playerName: '' };

  componentWillReceiveProps(nextProps) {
    const {
      ids,
      content,
    } = nextProps.game;

    ids.forEach((id) => {
      const player = content[id];
      if (player.life === 0) {
        this.setState({ showDialog: true, playerName: player.name });
      }
    });
  }

  getLife = playerId => this.props.game.content[playerId].life;

  getName = playerId => this.props.game.content[playerId].name;

  handleResetGame = () => {
    this.setState({ showDialog: false, playerName: '' });
    this.props.onReset();
  }

  render() {
    const {
      playerName,
      showDialog,
    } = this.state;

    return (
      <Grid className={styles.gridBackground} fluid>
        <Row className={cx(styles.row, 'show-grid')}>
          <Col md={6} mdPush={6}>
            <GameSection
              attakLabel="Rasengan"
              playerName={this.getName(PLAYER_ONE_ID)}
              enemy={PLAYER_TWO_ID}
              life={this.getLife(PLAYER_ONE_ID)}
            />
          </Col>
          <Col md={6} mdPull={6}>
            <GameSection
              attakLabel="Shidori"
              playerName={this.getName(PLAYER_TWO_ID)}
              enemy={PLAYER_ONE_ID}
              life={this.getLife(PLAYER_TWO_ID)}
            />
          </Col>
        </Row>
        <Dialog
          showDialog={showDialog}
          playerName={playerName}
          onReset={this.handleResetGame}
        />
      </Grid>
    );
  }
}

export default connect(
  ({ game }) => ({ game }),
  {
    onReset: reset,
  },
)(GameContainer);
