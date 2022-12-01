import { faker } from '@faker-js/faker';
import { createTask } from '../uteis/data';
import { getTasksFromLocalStorage, setTaskLocalStorage, addTaskLocalStorage, removeTaskLocalStorage, changeTaskStatus } from './localStorage';

describe('LocalStorage', () => { 
  afterEach(() => {
    localStorage.clear();
  })

  test('getTasksFromLocalStorage when is empty', () => {
    expect(getTasksFromLocalStorage()).toEqual([]);
  });

  test('setTaskLocalStorage', () => {
    const task = createTask()
    expect(setTaskLocalStorage([task])).toEqual([task]);
  });

  test('getTasksFromLocalStorage when has task', () => {
    const task = createTask()
    setTaskLocalStorage([task]);
    expect(getTasksFromLocalStorage()).toEqual([task]);
  });

  test('addTaskLocalStorage', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    
    expect(addTaskLocalStorage(newTask)).toEqual([newTask]);
  })

  test('removeTaskLocalStorage', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    addTaskLocalStorage(newTask)
    
    expect(removeTaskLocalStorage(1)).toEqual([]);
  })

  test('changeTaskStatus', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    addTaskLocalStorage(newTask)
    
    expect(changeTaskStatus(1, 'in_progress')).toEqual([{ id: 1, 
      description: newTask.description, 
      status: 'in_progress'}]);
  })
  

});

