import React from 'react';
import { render } from '@testing-library/react';
import SearchBox from './SearchBox';

test('renders Search', () => {
    const { getByText } = render(<SearchBox />);
    expect(document.querySelector("input").getAttribute("placeholder").indexOf("search")).toBeGreaterThan(-1);
});
