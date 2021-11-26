import React from 'react';

export type TractorStoreProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function TractorStore({ text }: TractorStoreProps) {
  return (
    <div>
      {text}
    </div>
  );
}
