import { faker } from '@faker-js/faker';
import { createTask } from '../uteis/data';
import loadData  from './loadData';
import { setTaskLocalStorage } from './localStorage';

describe('LoadData', () => { 
  afterEach(() => {
    localStorage.clear();
  })

  test('loadData when is empty', () => {
    expect(loadData()).toEqual({"count": 0, "list": [], "listArchived": [], "listDone": [], "listInProgress": [], "listTodo": [], "loading": false});
  });

  test('loadData is not empty', () => {
    const task = createTask()
    setTaskLocalStorage([task])
    expect(loadData()).toEqual(
      {"count": 1, "list": [task], "listArchived": [], "listDone": [], "listInProgress": [], "listTodo": [task], "loading": false}
      
      );
  });

});

