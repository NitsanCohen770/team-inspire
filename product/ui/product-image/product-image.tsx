import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';
import React from 'react';
import styles from './styles.module.scss';

export function ProductImage() {
  const selectedProductImage =
    useTractorStoreContext().selectedProduct?.fileName;
  return <img className={styles.image} src={selectedProductImage} />;
}
