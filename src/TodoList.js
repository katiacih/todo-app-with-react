import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  flex-flow: column;
  align-items: flex-start;
  padding: 24px;
  `;

const Empty = styled.div`
  position: relative; 
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TxtEmpty = styled.p`
  font-weight: 400;
  color: #565251;
`;

/**
 * render tasks.
 * @param {any} tasks[]- list of tasks.
 */
function TodoList({tasks}) {
  console.log(tasks);

  if(tasks === undefined | tasks?.length === 0) {
    return <Empty><TxtEmpty>Não há itens adicionados</TxtEmpty></Empty>
  }

  return (
      <List>
        {tasks.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </List>
    )
}

export default TodoList;