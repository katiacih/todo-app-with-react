import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

const List = styled.ul`
  list-style: none;
  flex-flow: column;
  align-items: flex-start;
  padding: 30px 24px;
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
 * @param {any[]} tasks[]- list of tasks.
 */
function Tasks({tasks}) {
  if(tasks === undefined | tasks?.length === 0) {
    return <Empty><TxtEmpty>Não há itens adicionados</TxtEmpty></Empty>
  }

  return (
      <List>
        {tasks.map((item) => <ItemList key={item.id} task={item} hideTopBtn={item.status === 'todo'} hideDownBtn={item.status === 'archived'}/>)}
      </List>
    )
}


Tasks.propTypes = {
  tasks: PropTypes.array
}

export default Tasks;