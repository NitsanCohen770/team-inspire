import React from 'react';

export type TitleProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Title({ text }: TitleProps) {
  return (
    <div>
      {text}
    </div>
  );
}
