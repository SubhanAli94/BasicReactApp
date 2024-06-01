import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Header and LoginForm components
jest.mock('./Header', () => () => <div data-testid="header">Mock Header</div>);
jest.mock('./LoginForm', () => () => <div data-testid="login-form">Mock LoginForm</div>);

test('renders Header and LoginForm components in App', () => {
  // Render the App component
  render(<App />);
  
  // Assert that Header component is rendered
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  // Assert that LoginForm component is rendered
  const loginFormElement = screen.getByTestId('login-form');
  expect(loginFormElement).toBeInTheDocument();
});
