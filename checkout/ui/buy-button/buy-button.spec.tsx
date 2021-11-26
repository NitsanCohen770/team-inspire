import React from 'react';
import { render } from '@testing-library/react';
import { BasicBuyButton } from './buy-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBuyButton />);
  const rendered = getByText('hello from BuyButton');
  expect(rendered).toBeTruthy();
});
