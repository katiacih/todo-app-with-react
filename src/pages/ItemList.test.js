import ItemList from './ItemList';
import { screen, render, fireEvent } from '@testing-library/react';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('ItemList - Component', () => {
  test('renders INFO to correctly', () => {
    const task = {id: 1, description: 'testing component', status: 'todo'};
    render(<ItemList task={task} />)
    
    expect(screen.getByText('testing component')).toBeInTheDocument();
    expect(screen.getByRole("btnRemoveItem")).toBeVisible();
  });


  test('validate remove item', () => {
    const task = {id: 1, description: 'testing component', status: 'todo'};
    render(<ItemList task={task} />)
    fireEvent.click(screen.getByRole("btnRemoveItem"))

    expect(screen.getByText('Confirme para remover tarefa')).toBeVisible();
  });

})

