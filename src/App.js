
import React, { useEffect } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import { loadList } from './actions/loadList';


const Wrapper = styled.div`
  height: 100% ;
  padding: 24px;
  background-color: #ececec73;
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
  
  useEffect(() => {
    dispatch(loadList(dispatch));
  }, [dispatch])
  // const lista = dispatch(mountLista())
  // const test = dispatch(getList());
  // const list = useSelector(getState);


  return (
    <Wrapper >
      <Title>My day</Title>
      <SectionWrapper>
        <SectionTodo>TO DO</SectionTodo>
        <TodoList tasks={[]}/>
      </SectionWrapper>

      <SectionWrapper>
        <SectionInProgress>EM PROGRESSO</SectionInProgress>
        <TodoList/>
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
