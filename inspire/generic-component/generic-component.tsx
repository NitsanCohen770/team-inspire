import React from 'react';

export type GenericComponentProps<Type> = {
  data: Type[];
};

export function GenericComponent<Type>({ data }: GenericComponentProps<Type>) {
  return (
    <>
      {data?.map((item: Type, index: number) => (
        <ul key={index}>
          {(Object.keys(data[0]) as Array<keyof Type>).map((key) => (
            <li key={key.toString()}>{item[key]}</li>
          ))}
        </ul>
      ))}
    </>
  );
}
