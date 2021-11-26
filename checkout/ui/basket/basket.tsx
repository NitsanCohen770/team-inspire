import React from 'react';
import styles from './styles.module.scss';

export type BasketProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Basket({ text }: BasketProps) {
  return <div>{text}</div>;
}
