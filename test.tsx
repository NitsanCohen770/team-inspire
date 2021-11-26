import React, { ButtonHTMLAttributes } from 'react';

export type IButton = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant = 'primary', ...rest }: IButton) => {
  return (
    <button className={cs(styles.base, styles[variant])} {...rest}>
      {children}
    </button>
  );
};
