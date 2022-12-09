import { faker } from '@faker-js/faker';
import changeStatus from './changeStatus';
import { addTaskLocalStorage } from './localStorage'

describe('LocalStorage', () => { 
  afterEach(() => {
    localStorage.clear();
  })

  test('validate change status', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    addTaskLocalStorage(newTask);
    const result = changeStatus(newTask.id, 'in_progress');
    expect(result.listTodo).toEqual([]);
    expect(result.listInProgress).toEqual([{...newTask, status: 'in_progress'}]);

  });

});

