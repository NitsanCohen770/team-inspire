import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type CurrencyProps = {
  currencySign?: '$' | '€';
  price: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function Currency({
  price,
  currencySign = '$',
  className,
}: CurrencyProps) {
  const [currency, setCurrency] = useState(0);
  useEffect(() => {
    if (currencySign === '$') {
      fetch(
        'http://api.exchangeratesapi.io/v1/latest?access_key=519a170df49fb342009faba61bee1bbd'
      ).then((res) =>
        res.json().then(({ rates: { USD } }) => setCurrency(USD))
      ),
        [];
    }
  });

  return (
    <div
      className={classNames(styles.price, className)}
      data-testid="test-currency"
    >
      {currencySign} {currency ? price * currency : price}
    </div>
  );
}
