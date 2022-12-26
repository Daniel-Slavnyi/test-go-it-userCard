import { useState } from 'react';
import users from './users.json';

console.log(users);

export const App = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(0);

  return <div></div>;
};
