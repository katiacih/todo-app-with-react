import { faker } from '@faker-js/faker';
import loadData  from './loadData';
import { addTaskLocalStorage } from './localStorage';

describe('LoadData', () => { 
  afterEach(() => {
    localStorage.clear();
  })

  test('loadData when is empty', () => {
    expect(loadData()).toEqual({"count": 0, "list": [], "listArchived": [], "listDone": [], "listInProgress": [], "listTodo": [], "loading": false});
  });

  test('loadData is not empty', () => {
    const newTask = { id: 1, 
      description: faker.lorem.sentence(), 
      status: 'todo'}
    addTaskLocalStorage(newTask)
    expect(loadData()).toEqual(
      {"count": 1, "list": [newTask], "listArchived": [], "listDone": [], "listInProgress": [], "listTodo": [newTask], "loading": false}
      
      );
  });

});

