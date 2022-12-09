import { render, screen, fireEvent } from '@testing-library/react';
import ModalRemove from './ModalRemove';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('ModalRemove - Component', () => {
  test('renders with success', () => {
    render(<ModalRemove show={true} hideModal={jest.fn()} taskId={1}/> );
    expect(screen.getByText('Confirme para remover tarefa')).toBeVisible();
    expect(screen.getByText('Confirmar')).toBeVisible();
  });
  test('validates confirmed', () => {
    const handleHide = jest.fn()
    render(<ModalRemove show={true} hideModal={handleHide} taskId={1}/>  );
    fireEvent.click(screen.getByText('Confirmar'));
    expect(handleHide).toHaveBeenCalledTimes(1);
  });
})