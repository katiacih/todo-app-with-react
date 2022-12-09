import { changeTaskStatus } from './localStorage';
import { buildDataTask } from '../uteis/filters';


/**
 * remove task in local storage .
 * @param {number} taskId - id of task
 * @param {string} newStatus - status of task ( 'todo' | 'in_progress' | 'done' | 'archived')
 * @return {any} object 
 */

function changeStatus(taskId, newStatus) {
  const list = changeTaskStatus(taskId, newStatus)
  return buildDataTask(list);

}


export default changeStatus;
