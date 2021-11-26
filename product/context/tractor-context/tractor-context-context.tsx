import React, { useContext } from 'react';
import {
  CreateProductsContext,
  ProductsContextProvider,
} from '@nitsan770/product.product-context';
import { Tractor } from '@nitsan770/product.tractor';

export const TractorStoreContext = CreateProductsContext<Tractor>();

export const useTractorStoreContext = () => useContext(TractorStoreContext);

export function TractorStoreContextProvider({ children }) {
  return (
    <ProductsContextProvider<Tractor>
      idFieldName="id"
      context={TractorStoreContext}
    >
      {children}
    </ProductsContextProvider>
  );
}
