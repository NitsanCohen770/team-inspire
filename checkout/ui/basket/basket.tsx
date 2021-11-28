import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';
import React from 'react';
import styles from './styles.module.scss';

export function Basket() {
  const tractorContext = useTractorStoreContext();
  const isCartEmpty = tractorContext.cart.length === 0;
  return (
    <div className={isCartEmpty ? styles.empty : styles.full}>
      basket: {tractorContext.cart.length} item(s)
    </div>
  );
}
