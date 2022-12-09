import React, { useState } from 'react';
import styled from 'styled-components'
import { Button, ButtonGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ModalRemove from './components/ModalRemove';
import { changeTask } from '../store/tasksSlice';
import { useDispatch } from 'react-redux';


const Description = styled.span`
  font-size: 1.2em;
  text-align: center;
  color: #595656;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 1px solid #ebe5e5;
`;
/**
 * Represents a task.
 * @param {any} task - Represents task.
 * @param {any} task.id - id of task
 * @param {string} task.description  - description of task
 * @param {string} task.status - status of task ( 'todo' | 'in_progress' | 'done' | 'archived')
 */
function ItemList({task, hideTopBtn = false, hideDownBtn = false }) {
  const [showModalRemove, setShowModalRemove ] = useState(false);
  const dispatch = useDispatch();
  const remove = () => {
    setShowModalRemove(true)
  }

  const getNewStatus = (isNextState) =>  { 
    switch (task.status) {
      case 'todo': return 'in_progress'
      case 'in_progress': return isNextState ? 'done' : 'todo'
      case 'done': return isNextState ? 'archived' : 'in_progress'
      case 'archived': return 'done'
      default: return 'done'
    }
  }

  const change = (isNextState) => {
    const newStatus = getNewStatus(isNextState)   
    dispatch(changeTask({taskId: task.id, status: newStatus}));
  }
  
  return (
    <>
      {
        showModalRemove && 
       <ModalRemove show={showModalRemove} hideModal={() => setShowModalRemove(false)} taskId={task.id} />
      }
      <Item key={task.id}>
        <Description>{task.description}</Description>
        <ButtonGroup aria-label="Actions">
          {
            !hideTopBtn && <Button variant="outlined" onClick={() => {
              change(false)
            }}>⬆️</Button>
          }
          {
            !hideDownBtn && <Button variant="outlined"  onClick={() => {
              change(true)
            }} >⬇️</Button>
          }
          <Button role="btnRemoveItem" variant="outlined" onClick={() => remove()}>🗑</Button>
        </ButtonGroup>
      </Item>
    </>
  )
}

ItemList.propTypes = {
  task: PropTypes.object,
  hideTopBtn: PropTypes.bool,
  hideDownBtn: PropTypes.bool
}

export default ItemList;