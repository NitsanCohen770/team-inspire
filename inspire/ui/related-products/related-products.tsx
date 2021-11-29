import { useTractorStoreContext } from '@nitsan770/product.context.tractor-context';
import React from 'react';
import styles from './styles.module.scss';
import * as relatedImages from './related-images';

export function RelatedProducts() {
  const {
    selectedProduct: { category },
  } = useTractorStoreContext();
  const renderImages = (() => {
    if (category === 'great')
      return [relatedImages.img1, relatedImages.img2, relatedImages.img3];
    if (category === 'wonderful')
      return [relatedImages.img4, relatedImages.img5, relatedImages.img6];
    if (category === 'awesome')
      return [relatedImages.img7, relatedImages.img8, relatedImages.img9];
  })();

  return (
    <div className={styles.container}>
      <span>Related Products</span>
      {renderImages.map((image) => (
        <img key={image} src={image} />
      ))}
    </div>
  );
}
