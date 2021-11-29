// import React, { useContext } from 'react';
// import { Product } from '@nitsan770/product.product';
// import { mockData } from './MOCK_DATA.js';
// import { ProductsContextProvider, CreateProductsContext } from './index';

// const contextObject = CreateProductsContext<Product>();

// const MockUpdateContextComponent = () => {
//   const context = useContext(contextObject);

//   function addItemToCart() {
//     const randomIndex = Math.floor(Math.random() * 100) + 1;

//     context.addToCart(mockData[randomIndex]);
//     console.log(context.cart.length);
//   }
//   return (
//     <div>
//       <button onClick={addItemToCart}>add to cart</button>
//     </div>
//   );
// };

// const MockFavesDisplay = () => {
//   const context = useContext(contextObject);

//   return (
//     <div>
//       {context.cart.map((cartItem) => {
//         return (
//           <div>
//             {cartItem.item.title} - Price:{' '}
//             <strong>{cartItem.item.price}</strong>
//             <span>quantity:{cartItem.quantity}</span>
//             <button onClick={() => context.removeFromCart(cartItem)}>
//               Remove
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export const BasicThemeUsage = () => {
//   return (
//     <ProductsContextProvider<Product>
//       idFieldName="id"
//       context={contextObject}
//       products={[]}
//     >
//       <MockUpdateContextComponent />
//       <MockFavesDisplay />
//     </ProductsContextProvider>
//   );
// };
