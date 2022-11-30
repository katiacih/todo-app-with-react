

 function isStatusTodo(task){
  return task.status === 'todo';
}

 function isStatusInProgress(task){
  return task.status === 'in_progress';
}

 function isStatusDone(task){
  return task.status === 'done';
}

function isStatusArchived(task){
  return task.status === 'archived';
}

/**
 * filter status 'todo'.
 * @param {any[]} list
 */
export function filterListByTodo(list) {
  return list.filter(isStatusTodo)
}

/**
 * filter status 'in_progress'.
 * @param {any[]} list
 */
export function filterListByInProgress(list) {
  return list.filter(isStatusInProgress)
}

/**
 * filter status 'done'.
 * @param {any[]} list
 */
export function filterListByDone(list) {
  return list.filter(isStatusDone)
}


/**
 * filter status 'archived'.
 * @param {any[]} list
 */
export function filterListByArchived(list) {
  return list.filter(isStatusArchived)
}


/**
 * '.
 * @param {any[]} list
 * @return {any[]} 
 */
 export function buildDataTask(list) {
  return ({
    list: list,
    listTodo: filterListByTodo(list),
    listInProgress: filterListByInProgress(list),
    listDone: filterListByDone(list),
    listArchived: filterListByArchived(list),
    count: list.length,
    loading: false
  })
}


