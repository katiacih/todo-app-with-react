import { getTasksFromLocalStorage } from './localStorage';

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
function loadData() {
  const list = getTasksFromLocalStorage();

  // console.log(list);

 return ({
    list: list,
    listTodo: list.filter(isStatusTodo),
    listInProgress: list.filter(isStatusInProgress),
    listDone: list.filter(isStatusDone),
    listArchived: list.filter(isStatusArchived),
    count: list.length,
    loading: false
  })
}
export default loadData;