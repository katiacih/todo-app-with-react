import { createSlice } from '@reduxjs/toolkit'
import createTask from '../actions/createTask';
import loadData from '../actions/loadData';

export const tasksSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
    listTodo: [],
    listInProgress: [],
    listDone: [],
    listArchived: [],
    count: 0,
    loading: false
  },
  reducers: {
    getList() { return loadData() },
    newTask(_, action) {
      if(action.type === 'todo/newTask') {
        const newList = createTask(action.payload)
        return newList
      }
    }
    // loadAllListTasks: _ => loadData(),
    // changedToInProgress: state => { state.list = []}, 
    // mountLista: state => state, 
  }
})

// Action creators are generated for each case reducer function
export const { getList, newTask } = tasksSlice.actions;

// export const getState = createSelector(
//   (state) => { 
//     console.log('getState');
//     console.log(state);
//     return state?.tasks
//   }
export const getState = (state) => { 
    console.log('getState');
    console.log(state);
    return state?.tasks
  }
  // (state) => state.tasks,
  // (todos) => tasks.filter((tasks) => todo.completed).length

export default tasksSlice.reducer;