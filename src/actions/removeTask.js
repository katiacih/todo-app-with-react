import { removeTaskLocalStorage } from './localStorage';
import { buildDataTask } from '../uteis/filters';


/**
 * remove task in local storage .
 * @param {number} taskId - id of task
 * @return {any} object 
 */

function removeTask(taskId) {
  const list = removeTaskLocalStorage(taskId)
  return buildDataTask(list);

}


export default removeTask;
