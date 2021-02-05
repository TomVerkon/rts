import React, { useState, FC } from 'react';

const users = [
  { name: 'Tom', age: 50 },
  { name: 'Denise', age: 49 },
  { name: 'Dilbert', age: 70 },
];

const UserSearch: FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={onClick}>
        Find User
      </button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};
export default UserSearch;
