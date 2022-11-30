import { addTaskLocalStorage } from './localStorage';
import { buildDataTask } from '../uteis/filters';


/**
 * crete new task in local storage .
 * @param {any} task - Represents task.
 * @param {any} task.id - id of task
 * @param {string} task.description  - description of task
 * @param {string} task.status - status of task ( 'todo' | 'in_progress' | 'done' | 'archived')
 * @return {any} object 
 */

function createTask(task) {
  const list = addTaskLocalStorage(task)
  return buildDataTask(list);

}


export default createTask;
