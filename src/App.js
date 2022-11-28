
import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './pages/TodoList';
import { useDispatch } from 'react-redux';
import { loadAllListTasks } from './store/todoSlice';
import { Button } from 'react-bootstrap';
import  NewTask  from './pages/NewTask'


const Wrapper = styled.div`
  height: 100% ;
  padding: 24px;
  background-color: #ececec73;
  position: relative;
`;

const WrapperHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 60px;
`;

const SectionWrapper = styled.section`
  -webkit-box-shadow: -6px 40px 21px -42px rgba(74,74,74,1);
  -moz-box-shadow: -6px 40px 21px -42px rgba(74,74,74,1);
  box-shadow: -6px 40px 21px -42px rgba(74,74,74,1);
  background-color: white;
  position: relative;
  min-height: 200px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.span`
  font-weight: 500;
  padding: 2px 6px;
  font-size: larger;
  position: absolute;
  color: white;
  top: -10px;
  left: 13px;
  z-index: 1;
`;


const SectionTodo = styled(SectionTitle)`
  background-color: #ff75d6;
`;
const SectionInProgress = styled(SectionTitle)`
  background-color: #f68251;
  `;
const SectionDone = styled(SectionTitle)`
  background-color:  green;
  `;
const SectionArchived = styled(SectionTitle)`
  background-color: gray;
`;



function App() {
  const dispatch = useDispatch();
  const dataLoaded = dispatch(loadAllListTasks());
  console.log(`dataLoadrd -> ${dataLoaded.list}`);
  const [data, setData ] = useState(dataLoaded);
  const [showModal, setShowModal ] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }
  return (
    <Wrapper >
        <Title>My day</Title>
      <WrapperHeader>
        <Button variant="primary">Nova tarefa</Button>{' '}
      </WrapperHeader>
      <NewTask show={showModal} hideModal={handleCloseModal}/>
      <SectionWrapper>
        <SectionTodo>TO DO</SectionTodo>
        <TodoList tasks={data.listTodo}/>
      </SectionWrapper>


      <SectionWrapper>
        <SectionInProgress>EM PROGRESSO</SectionInProgress>
        <TodoList tasks={data.listTodo}/>
      </SectionWrapper>

      <SectionWrapper>
        <SectionDone >FEITO</SectionDone>
        {/* <TodoList/> */}
      </SectionWrapper>
     
      <SectionWrapper>
        <SectionArchived>ARQUIVADO</SectionArchived>
        {/* <TodoList/> */}
      </SectionWrapper>
    </Wrapper>
  );
}

export default App;
