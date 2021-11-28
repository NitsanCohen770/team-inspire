import React from 'react';
import { Basket } from '@nitsan770/checkout.ui.basket';
import { Title } from '@nitsan770/product.ui.title';
import { ProductImage } from '@nitsan770/product.ui.product-image';
import { ProductTitle } from '@nitsan770/product.ui.product-title';
import { ProductPicker } from '@nitsan770/product.ui.product-picker';
import { BuyButton } from '@nitsan770/checkout.ui.buy-button';
import { RelatedProducts } from '@nitsan770/inspire.related-products';
import styles from './styles.module.scss';
import { TractorStoreContextProvider } from '@nitsan770/product.context.tractor-context';

export function TractorStore() {
  return (
    <TractorStoreContextProvider>
      <div className={styles.container}>
        <div className={styles.right_side}>
          <div className={styles.header}>
            <Title text="The Modal Store" />
            <Basket />
          </div>
          <div className={styles.main}>
            <ProductImage />
            <div className={styles.flex_end}>
              <ProductTitle />
              <ProductPicker />
              <BuyButton text="buy for" />
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <RelatedProducts images={['2', '3']} />
        </div>
      </div>
    </TractorStoreContextProvider>
  );
}
