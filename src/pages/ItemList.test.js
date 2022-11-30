import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('renders INFO to correctly', () => {
  render(<ItemList task={{id: 1, description: 'testing component'}} />);
  const element = screen.getByText('testing component');
  expect(element).toBeInTheDocument();
});
