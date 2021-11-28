import React, { useContext } from 'react';
import {
  CreateProductsContext,
  ProductsContextProvider,
} from '@nitsan770/product.product-context';
import { Tractor } from '@nitsan770/product.tractor';
import * as images from './tractor-images';

export const TractorStoreContext = CreateProductsContext<Tractor>();

export const useTractorStoreContext = () => useContext(TractorStoreContext);

export function TractorStoreContextProvider({ children }) {
  const productsList: Tractor[] = [
    {
      id: '1212s',
      price: 66,
      category: 'great',
      title: 'Tractor Porsche-Diesel Master 419',
      isChosen: true,
      fileName: images.tractor_red,
    },
    {
      id: '12144442s',
      price: 54,
      category: 'wonderful',
      title: 'Tractor Fendt F20 Diesele',
      isChosen: false,
      fileName: images.tractor_green,
    },
    {
      id: '1212s52335',
      price: 58,
      category: 'awesome',
      title: 'Tractor Eicher Diesel 215/16',
      isChosen: false,
      fileName: images.tractor_blue,
    },
  ];

  return (
    <ProductsContextProvider<Tractor>
      idFieldName="id"
      context={TractorStoreContext}
      products={productsList}
    >
      {children}
    </ProductsContextProvider>
  );
}
