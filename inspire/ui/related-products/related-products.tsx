import React from 'react';
import styles from './styles.module.scss';

export type RelatedProductsProps = {
  images: string[];
};

export function RelatedProducts({ images }: RelatedProductsProps) {
  return (
    <div className={styles.container}>
      <span>Related Products</span>
      {images.map((image) => (
        <img key={image} src={require(`./images/${image}.jpg`)} />
      ))}
    </div>
  );
}
