import React, { useState, HTMLAttributes } from 'react';
import {
  ProductsContextType,
  ProductsListItem,
} from './product-context-context';

export type ProductsContextProps<TItemType> = {
  idFieldName: string;
  context: React.Context<ProductsContextType<TItemType>>;
  products: TItemType[];
} & HTMLAttributes<HTMLDivElement>;

export function ProductsContextProvider<TItemType>({
  children,
  idFieldName = 'id',
  products,
  context,
}: ProductsContextProps<TItemType>) {
  const [cart, setCart] = useState<ProductsListItem<TItemType>[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<TItemType>(
    products[0]
  );

  function findInCart(item: TItemType): number {
    return cart.findIndex((p) => p.item[idFieldName] === item[idFieldName]);
  }

  const addToCart = (item: TItemType) => {
    const index = findInCart(item);
    if (index === -1) {
      const newItem: ProductsListItem<TItemType> = { item, quantity: 1 };
      setCart([...cart, newItem]);
    } else {
      const updatedCart = cart;
      updatedCart[index] = {
        item: cart[index].item,
        quantity: updatedCart[index].quantity + 1,
      };
      setCart([...updatedCart]);
    }
  };

  const removeFromCart = ({ item }: ProductsListItem<TItemType>) => {
    const index = findInCart(item);
    if (cart[index].quantity === 1) {
      const updatedCart: ProductsListItem<TItemType>[] = cart.filter(
        (cartItem) => cartItem.item[idFieldName] != item[idFieldName]
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart;
      updatedCart[index] = {
        item: cart[index].item,
        quantity: updatedCart[index].quantity - 1,
      };
      setCart([...updatedCart]);
    }
  };

  const selectProduct = (selectedProduct: TItemType) => {
    setSelectedProduct(selectedProduct);
  };

  const contextValue: ProductsContextType<TItemType> = {
    products,
    cart,
    removeFromCart,
    addToCart,
    selectProduct,
    selectedProduct,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}
