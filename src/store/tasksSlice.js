import { createSlice } from '@reduxjs/toolkit'
import createTask from '../actions/createTask';
import loadData from '../actions/loadData';
import changeStatus from '../actions/changeStatus';
import removeTask from '../actions/removeTask';

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
        const newList = createTask(action.payload);
        return newList;
      }
    },
    remove(_, action) { 
      if(action.type === 'todo/remove') {
        const newList = removeTask(action.payload)
        return newList;
      }
    },
    changeTask(_, action) {
      if(action.type === 'todo/changeTask') {
        const newList = changeStatus(action.payload?.taskId,  action.payload?.status)
        return newList;
      }
    } 
  }
})

// Action creators are generated for each case reducer function
export const { getList, newTask, remove, changeTask } = tasksSlice.actions;


export const getState = (state) => { 
    return state?.tasks
  }

export default tasksSlice.reducer;