import React from 'react';
import styled from 'styled-components'


const Description = styled.span`
  font-size: 1.2em;
  text-align: center;
  color: #595656;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
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
      <Checkbox type="checkbox" />
      <Description>{task.description}</Description>
    </Item>
  )
}

export default ItemList;