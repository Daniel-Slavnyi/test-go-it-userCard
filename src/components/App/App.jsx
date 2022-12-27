import React, { Component } from 'react';
import css from './App.module.css';

import usersData from '../users.json';
import CardOfUser from 'components/CardOfUser/CardOfUser';

class App extends Component {
  render() {
    return (
      <div>
        <ul className={css.list}>
          {usersData.map(user => (
            <CardOfUser key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

//  makeAktiveIdx = id => {
//    this.setState({
//      users: this.state.users.map(user =>
//        user.id === id
//          ? {
//              ...user,
//              isFollowing: user?.isFollowing ? !user.isFollowing : true,
//            }
//          : { ...user, isFollowing: user?.isFollowing ?? false }
//      ),
//    });
//  };
