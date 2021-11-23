import React from 'react';
import { render } from '@testing-library/react';
import { BasicRelatedProducts } from './related-products.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRelatedProducts />);
  const rendered = getByText('hello from RelatedProducts');
  expect(true).toBeTruthy();
});
