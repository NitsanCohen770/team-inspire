import React from 'react';
import styles from './styles.module.scss';

export type TitleProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Title({ text }: TitleProps) {
  return <h1 className={styles.title}>{text}</h1>;
}
