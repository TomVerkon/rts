import React from 'react';
import UserSearch from './classes/UserSearch';
import { users } from './state/UserSearch';

function App() {
  return <UserSearch users={users} />;
}

export default App;
