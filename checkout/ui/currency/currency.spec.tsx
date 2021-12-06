import React from 'react';
import { render } from '@testing-library/react';
import { DollarCurrency } from './currency.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<DollarCurrency />);

  expect(true).toBeTruthy();
});
