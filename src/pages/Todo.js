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
 * @param {any} todo - Represents task.
 * @param {any} todo.id - id of task
 * @param {any} todo.description  - description of task
 * @param {any} todo.status - status of task
 */
function Todo({todo}) {

  
  return (
    <Item key={todo.id}>
      <Checkbox type="checkbox" />
      <Description>{todo.description}</Description>
    </Item>
  )
}

export default Todo;