import { faker } from '@faker-js/faker';
import createTask from './createTask';

describe('LocalStorage', () => { 
  afterEach(() => {
    localStorage.clear();
  })

  test('createData when is empty', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    
    expect(createTask(newTask)).toEqual({"count": 1, "list": [newTask], "listArchived": [], "listDone": [], "listInProgress": [], "listTodo": [newTask], "loading": false});

  });

});

