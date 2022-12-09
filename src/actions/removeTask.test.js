import { faker } from '@faker-js/faker';
import removeTask from './removeTask';
import { addTaskLocalStorage } from './localStorage';

describe('Remove task', () => { 
  afterEach(() => {
    localStorage.clear();
  })

  test('Remove task with success ', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    addTaskLocalStorage(newTask)    
    expect(removeTask(newTask.id)).toEqual({"count": 0, "list": [], "listArchived": [], "listDone": [], "listInProgress": [], "listTodo": [], "loading": false});
  });

});

