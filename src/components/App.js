import React from 'react';
import FriendList from './FriendList/FriendList';

import friends from '../data/friends.json';

const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};

export default App;
