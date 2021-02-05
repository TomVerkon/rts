import React, { useState, FC, useRef, useEffect } from 'react';

export const users = [
  { name: 'Tom', age: 50 },
  { name: 'Denise', age: 49 },
  { name: 'Dilbert', age: 70 },
];

const UserSearch: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  useEffect(() => {
    // this if logic is known as a type guard
    if (!inputRef.current) {
      return;
    }
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={onClick}>
        Find User
      </button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};
export default UserSearch;
