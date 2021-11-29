import React from 'react';
import { render } from '@testing-library/react';
import { BasicCurrency } from './currency.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCurrency />);
  const rendered = getByText('hello from Currency');
  expect(rendered).toBeTruthy();
});
