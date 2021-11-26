import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductPicker } from './product-picker.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProductPicker />);
  const rendered = getByText('hello from ProductPicker');
  expect(rendered).toBeTruthy();
});
