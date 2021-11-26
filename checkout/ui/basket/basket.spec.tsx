import React from 'react';
import { render } from '@testing-library/react';
import { BasicBasket } from './basket.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBasket />);
  const rendered = getByText('hello from Basket');
  expect(rendered).toBeTruthy();
});
