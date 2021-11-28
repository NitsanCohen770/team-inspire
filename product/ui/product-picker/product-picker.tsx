import React from 'react';
import styles from './styles.module.scss';
import cs from 'classnames';
import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';

export function ProductPicker() {
  const { selectedProduct, selectProduct, products } = useTractorStoreContext();
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <img
          className={cs(
            styles.img,
            selectedProduct.id === product.id && styles.active
          )}
          onClick={() => selectProduct(product)}
          src={product.fileName}
        />
      ))}
    </div>
  );
}
