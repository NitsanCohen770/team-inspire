import React from 'react';
import { GenericComponent } from './generic-component';

export const BasicGenericComponent = () => (
  <GenericComponent
    data={[
      { name: 'Nitsan', city: 'Harish' },
      { name: 'Abraham', city: 'Beer Sheva' },
    ]}
  />
);
