import { render, screen, fireEvent } from '@testing-library/react';
import NewTask from './NewTask';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('NewTask - Component', () => {
  test('renders with success', () => {
    render(<NewTask show={true} hideModal={jest.fn()}/> ); 
    expect(screen.getByText('Nova tarefa')).toBeVisible();
    expect(screen.getByText('Salvar')).toBeVisible();
  });
  test('create new task with success', () => {
    const handleHide = jest.fn()
    render(<NewTask show={true} hideModal={handleHide}/> ); 
    fireEvent.change(screen.getByLabelText(/Descrição/i), {target: {value: 'a'}});
    fireEvent.click(screen.getByText('Salvar'));
    expect(handleHide).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Task adicionada com sucesso!')).toBeVisible();
  });

  test('validate field required with success', () => {
    const handleHide = jest.fn()
    render(<NewTask show={true} hideModal={handleHide}/> ); 
    fireEvent.click(screen.getByText('Salvar'));
    expect(handleHide).not.toHaveBeenCalled();
  });
})