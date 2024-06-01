import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  // Update the query to match the text more flexibly
  const linkElement = screen.getByText(/learn react/i);
  
  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
