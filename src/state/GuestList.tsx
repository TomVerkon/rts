import React, { FunctionComponent, useState } from 'react';

const GuestList: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>GuestList</h3>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={onClick}>
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
