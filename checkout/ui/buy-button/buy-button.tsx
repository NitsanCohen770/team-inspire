import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';
import React from 'react';
import styles from './styles.module.scss';

export type BuyButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function BuyButton({ text }: BuyButtonProps) {
  const selectedProduct = useTractorStoreContext()?.selectedProduct;
  const addToCart = useTractorStoreContext()?.addToCart;
  return (
    <div onClick={() => addToCart(selectedProduct)} className={styles.button}>
      {`${text} ${selectedProduct?.price} $`}{' '}
    </div>
  );
}
