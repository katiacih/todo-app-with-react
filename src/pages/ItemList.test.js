import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('renders INFO to correctly', () => {
  render(<ItemList todo={{id: 1, description: 'TEsting component'}} />);
  const element = screen.getByText(/TEst/i);
  expect(element).toBeInTheDocument();
});
