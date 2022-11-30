import React from 'react';
import styled from 'styled-components'
import { Button, ButtonGroup} from 'react-bootstrap';


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
function ItemList({task}) {

  
  return (
    <Item key={task.id}>
      <Description>{task.description}</Description>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outlined">⬆️</Button>
        <Button variant="outlined">⬇️</Button>
        <Button variant="outlined">🗑</Button>
      </ButtonGroup>
    </Item>
  )
}

export default ItemList;