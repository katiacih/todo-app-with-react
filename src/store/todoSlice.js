import { createSlice } from '@reduxjs/toolkit'
import { loadList } from '../actions/loadList'

const lista = [
  {
    id: 1,
    description: "Teste",
    status: 'in_progress'
  },
  {
    id: 2,
    description: "TEste 2",
    status: 'done'
  },
]


export const todoSlice = createSlice({
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
    getList: state => { state.list = [] },
    changedToInProgress: state => { state.list = []}, 
    mountLista: state => state, 
    addToList: (state, action) => {
      if(action === 'in_progress') return state.inProgress = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToList, mountLista, changedToInProgress, getList } = todoSlice.actions;

export const getState = state => state.todo

export default todoSlice.reducer;