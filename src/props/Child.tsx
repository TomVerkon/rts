import React, { FC } from 'react';
interface ChildProps {
  color: string;
  onClick: () => void;
}

// this will work but typescript doesn't understand this is a React Component definition
// Also to see the children prop, it has to be defined in interface
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button type="button" onClick={onClick}>
        click me
      </button>
    </div>
  );
};

Child.displayName = 'Child';

// This is seen as a React Component by typescript. It supports children without defininh in interface
export const ChildAsFC: FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      <h1>{color}</h1>
      {children}{' '}
      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
};

ChildAsFC.displayName = 'ChildAsFC';
