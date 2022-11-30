import { getTasksFromLocalStorage } from './localStorage';
import { buildDataTask } from '../uteis/filters'


/**
 * load tasks in local storage and build to store.
 * @return {any} object 
 */
function loadData() {
  const list = getTasksFromLocalStorage();
  return buildDataTask(list);
}
export default loadData;
