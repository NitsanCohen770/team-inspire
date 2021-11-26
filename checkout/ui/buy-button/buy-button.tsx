import React from 'react';
import styles from './styles.module.scss';

export type BuyButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function BuyButton({ text }: BuyButtonProps) {
  return <div className={styles.button}>{text}</div>;
}
