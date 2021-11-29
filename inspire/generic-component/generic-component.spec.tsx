import React from 'react';
import { render } from '@testing-library/react';
import { BasicGenericComponent } from './generic-component.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGenericComponent />);
  const rendered = getByText('hello from GenericComponent');
  expect(rendered).toBeTruthy();
});
