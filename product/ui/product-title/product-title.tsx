import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';
import React from 'react';
import styles from './styles.module.scss';

export function ProductTitle() {
  const productTitle =
    useTractorStoreContext().selectedProduct?.title?.split(' ');

  return (
    <div className={styles.text}>
      <strong className={styles.bold}>{productTitle && productTitle[0]}</strong>{' '}
      <small>{productTitle?.slice(1)?.join(' ')}</small>
    </div>
  );
}
