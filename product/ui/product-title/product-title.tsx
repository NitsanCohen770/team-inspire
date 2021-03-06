import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';
import React from 'react';
import styles from './styles.module.scss';

export function ProductTitle() {
  const {
    selectedProduct: { title },
  } = useTractorStoreContext();

  return (
    <div className={styles.text}>
      <strong className={styles.bold}>{title.split(' ')[0]}</strong>{' '}
      <small>{title.split(' ').slice(1)?.join(' ')}</small>
    </div>
  );
}
