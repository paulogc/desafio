import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'react-bootstrap';

const Dialog = (props) => {
  const {
    onReset,
    playerName,
    showDialog,
  } = props;

  return (
    <div className="static-modal">
      <Modal show={showDialog}>
        <Modal.Header>
          <Modal.Title>Game over</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {`${playerName} lost`}
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={onReset}
          >
            Reset Game
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
};

Dialog.propTypes = {
  onReset: PropTypes.func,
  playerName: PropTypes.string,
  showDialog: PropTypes.bool,
};

Dialog.defaultProps = {
  onReset: () => {},
  playerName: '',
  showDialog: false,
};

export default Dialog;
