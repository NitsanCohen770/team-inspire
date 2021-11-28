import { createContext } from 'react';

export type ProductsListItem<TItemType> = {
  item: TItemType;
  quantity: number;
};

export type ProductsContextType<TItemType> = {
  products: TItemType[];
  cart: ProductsListItem<TItemType>[];
  removeFromCart: (item: ProductsListItem<TItemType>) => void;
  addToCart: (item: TItemType) => void;
  selectProduct: (item: TItemType) => void;
  selectedProduct: TItemType;
};

const defaultContext: ProductsContextType<any> = {
  products: [],
  cart: [],
  removeFromCart: () => null,
  addToCart: () => null,
  selectProduct: () => null,
  selectedProduct: {},
};

export function CreateProductsContext<TItemType>() {
  return createContext<ProductsContextType<TItemType>>(defaultContext);
}
