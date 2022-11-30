import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import Tasks from './Tasks';

const item1 = {id: faker.datatype.number(), description: faker.lorem.sentence(), status: 'todo'}
const list = [item1]

describe('Component Tasks', () => {
  
  test('renders list', () => {
    render(<Tasks tasks={list} />);
    const element = screen.getByText(item1.description);
    expect(element).toBeInTheDocument();
  });
  test('render empty', () => {
    render(<Tasks tasks={[]} />);
    const element = screen.getByText('Não há itens adicionados');
    expect(element).toBeInTheDocument();
  });
})

