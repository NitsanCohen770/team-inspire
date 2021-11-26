import { createContext } from 'react';

export type ProductsListItem<TItemType> = {
  item: TItemType;
  quantity: number;
};

export type ProductsContextType<TItemType> = {
  cart: ProductsListItem<TItemType>[];

  removeFromCart: (item: ProductsListItem<TItemType>) => void;
  addToCart: (item: TItemType) => void;
};

const defaultContext: ProductsContextType<any> = {
  cart: [],
  removeFromCart: () => null,
  addToCart: () => null,
};

export function CreateProductsContext<TItemType>() {
  return createContext<ProductsContextType<TItemType>>(defaultContext);
}
