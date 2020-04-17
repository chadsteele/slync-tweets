import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Search', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Search/i);
  expect(text).toBeInTheDocument();
});


test('renders Loading', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Loading/i);
  expect(text).toBeInTheDocument();
});