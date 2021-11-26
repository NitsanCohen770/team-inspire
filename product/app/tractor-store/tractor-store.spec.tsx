import React from 'react';
import { render } from '@testing-library/react';
import { BasicTractorStore } from './tractor-store.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTractorStore />);
  const rendered = getByText('hello from TractorStore');
  expect(rendered).toBeTruthy();
});
