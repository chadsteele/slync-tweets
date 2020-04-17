import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import config from './config'

test('renders 1250960715579641857', () => {
  const { getByText } = render(<Card data={config.items[0]} />);
  expect(document.querySelector("a").getAttribute("href").indexOf("1250960715579641857")).toBeGreaterThan(-1);
});
