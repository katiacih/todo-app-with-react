import React from 'react';
import { getTasksFromLocalStorage } from '../actions/localStorage'
import { useDispatch } from 'react-redux';

/**
 * filter status 'todo'.
 */
 function isStatusTodo(task){
  return task.status === 'todo';
}
/**
 * filter status 'in_progress'.
 */
 function isStatusInProgress(task){
  return task.status === 'in_progress';
}
/**
 * filter status 'done'.
 */
 function isStatusDone(task){
  return task.status === 'done';
}
/**
 * filter status 'archived'.
 */
 function isStatusArchived(task){
  return task.status === 'archived';
}

/**
 * load tasks in local storage and build to store.
 * @return {any} object 
 */
export function loadList() {
  const list = getTasksFromLocalStorage();
  const dispatch = useDispatch();

  dispatch({
    list: list,
    listTodo: list.filter(isStatusTodo),
    listInProgress: list.filter(isStatusInProgress),
    listDone: list.filter(isStatusDone),
    listArchived: list.filter(isStatusArchived),
    count: list.length,
    loading: false
  })
}