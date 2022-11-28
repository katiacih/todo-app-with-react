import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders INFO to correctly', () => {
  render(<Todo todo={{id: 1, description: 'TEsting component'}} />);
  const element = screen.getByText(/TEst/i);
  expect(element).toBeInTheDocument();
});
