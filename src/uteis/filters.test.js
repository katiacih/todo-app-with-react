import { faker } from '@faker-js/faker';
import { filterListByTodo, filterListByDone, filterListByArchived, filterListByInProgress, buildDataTask} from './filters';

describe('Validate Filters', () => {
  const item1 = {id: faker.datatype.number(), description: faker.lorem.sentence(), status: 'todo'}
  const item2 = {id: faker.datatype.number(), description: faker.lorem.sentence(), status: 'in_progress'}
  const item3 = {id: faker.datatype.number(), description: faker.lorem.sentence(), status: 'in_progress'}
  const item4 = {id: faker.datatype.number(), description: faker.lorem.sentence(), status: 'done'}
  const item5 = {id: faker.datatype.number(), description: faker.lorem.sentence(), status: 'archived'}
  const list = [item1, item2, item3, item4, item5]

  test('validates filter by todo', () => {
    const result = filterListByTodo(list)
    expect(result).toContainEqual(item1);
  });

  test('validates filter by in_progress', () => {
    const result = filterListByInProgress(list)
    expect(result).toContainEqual(item2);
    expect(result).toContainEqual(item3);
  });

  test('validates filter by done', () => {
    const result = filterListByDone(list)
    expect(result).toContainEqual(item4);
  });

  test('validates filter by archived', () => {
    const result = filterListByArchived(list)
    expect(result).toContainEqual(item5);
  });

  test('build objects', () => {
    const result = buildDataTask(list)
    expect(result).toStrictEqual({
      list: list,
      listTodo: [item1],
      listInProgress: [item2, item3],
      listDone: [item4],
      listArchived: [item5],
      count: list.length,
      loading: false
    });
  });

});

