import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove as actionRemove } from '../../store/tasksSlice'

function ModalRemove({show, hideModal, taskId}) {
  const dispatch = useDispatch();
  const close = () => {
    hideModal();
  }

  const confirmed = () => {
    dispatch(actionRemove(taskId));
    hideModal();
  }

  return (
    <>
      <Modal show={show} onHide={close} >
        <Modal.Header closeButton>
          <Modal.Title>Remover tarefa</Modal.Title>
        </Modal.Header>

          <Modal.Body>
            <p>Confirme para remover tarefa</p>
            
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={close} variant="light">Cancelar</Button>
            <Button variant="primary" onClick={() => confirmed()}>Confirmar</Button>
          </Modal.Footer>
      </Modal>
      
    </>
  )
}

ModalRemove.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  confirmedRemoved: PropTypes.func,
  taskId: PropTypes.number,
}

export default ModalRemove;