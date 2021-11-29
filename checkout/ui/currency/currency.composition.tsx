import React from 'react';
import { Currency } from './currency';

export const DollarCurrency = () => (
  <Currency data-testid="test-currency" price={120} />
);

export const EuroCurrency = () => (
  <Currency data-testid="test-currency" currencySign="€" price={120} />
);
