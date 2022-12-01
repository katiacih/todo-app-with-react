import { faker } from '@faker-js/faker';

export const createTask = (status = 'todo') =>  {
  return { id: faker.datatype.number(), 
    description: faker.lorem.sentence(), 
    status: status}
}
