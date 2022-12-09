

/**
 * get all tasks from localStorage.
 * @returns {Array} todos
 */
export function getTasksFromLocalStorage() {
  const tasks = localStorage['tasks'];
  return tasks ? JSON.parse(tasks) : [];
}

/**
 * set task in localStorage.
 * @param {any} tasks[] - Represents list of tasks.
 */
export function setTaskLocalStorage(tasks) {
  localStorage['tasks'] = JSON.stringify(tasks)
  return tasks ? tasks : [];
}

/**
 * set task in localStorage.
 * @param {any} newTask - Represents one task.
 */
export function addTaskLocalStorage(newTask){
  const tasks = getTasksFromLocalStorage()
  const built = buildTask(newTask, tasks)
  tasks.push(built);
  setTaskLocalStorage(tasks)
  return tasks
}

/**
 * set task in localStorage.
 * @param {any} newTask - Represents one task.
 * @param {any} newTask.id - Represents one task.
 * @param {any} newTask.description - Represents one task.
 * @param {any} newTask.status - Represents one task.
 * @param {any[]} tasks - List of tasks
 */
function buildTask(newTask, tasks) {
  let maxId;
  if(tasks.length === 0 ) {
    maxId = 0;
  } else {
    const listIds = tasks.map((task) => task.id)
    maxId = Math.max(...listIds)
  }

  return {
    id: maxId + 1,
    description: newTask.description,
    status: newTask.status
  }
  
}

/**
 * set task in localStorage.
 * @param {any} newTask - Represents one task.
 */
export function removeTaskLocalStorage(taskId){
  let tasks = getTasksFromLocalStorage()
  tasks = tasks.filter(task => task.id !== taskId)
  setTaskLocalStorage(tasks)
  return tasks
}

/**
 * change task in localStorage.
 * @param {number} taskId- Id task.
 * @param {any} newStatus - 'to_do' | 'in_progress' | 'done' | 'archived'
 */
export function changeTaskStatus(taskId, newStatus){
  let tasks = getTasksFromLocalStorage()
  tasks =  tasks.map((item) => ( item.id === taskId ?  { id: item.id, description: item.description, status: newStatus } : item ))
  setTaskLocalStorage(tasks)
  return tasks
}
