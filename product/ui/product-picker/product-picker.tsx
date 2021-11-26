import React from 'react';
import styles from './styles.module.scss';

export function ProductPicker() {
  return (
    <div className={styles.container}>
      <img src={chosenProduct.url} />
      <div className={styles.viewer}>
        {chosenProduct.title}
        {viewProducts?.map((image) => (
          <img src={image} />
        ))}
      </div>
    </div>
  );
}
