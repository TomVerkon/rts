interface ChildProps {
  color: string;
}

// this will work but typescript doesn't understand this is a React Component definition
export const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

Child.displayName = 'Child';

// This is seen as a React Component by typescript.
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

ChildAsFC.displayName = 'ChildAsFC';
