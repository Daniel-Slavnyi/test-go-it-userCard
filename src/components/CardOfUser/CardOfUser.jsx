import React from 'react';
import { Component } from 'react';
import { ReactComponent as Elips } from '../../img/ellipse.svg';
import logo from '../../img/Logo.png';
import picture from '../../img/Picture.png';
import css from './CardOfUser.module.css';

export default class CardOfUser extends Component {
  state = {
    numOfFollow:
      JSON.parse(localStorage.getItem(`${this.props.user.user}`)) ??
      this.props.user.followers,
    isFollowing:
      JSON.parse(localStorage.getItem(`${this.props.user.id}`)) ??
      this.props.user.isFollowing ??
      false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isFollowing !== prevState.isFollowing) {
      window.localStorage.setItem(
        `${this.props.user.id}`,
        JSON.stringify(this.state.isFollowing)
      );

      window.localStorage.setItem(
        `${this.props.user.user}`,
        JSON.stringify(this.state.numOfFollow)
      );
    }
  }

  handleFollow = () => {
    this.setState(prevState => {
      if (prevState.isFollowing) {
        return {
          numOfFollow: prevState.numOfFollow - 1,
          isFollowing: !prevState.isFollowing,
        };
      }

      return {
        numOfFollow: prevState.numOfFollow + 1,
        isFollowing: !prevState.isFollowing,
      };
    });
  };

  render() {
    const { numOfFollow, isFollowing } = this.state;
    const { tweets, avatar } = this.props.user;

    return (
      <li className={css.item}>
        <div className={css.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={css.picture}>
          <img src={picture} alt="" />
        </div>
        <div className={css.wrapImg}>
          <div className={css.imgElips}>
            <Elips />
          </div>
          <div className={css.imgUser}>
            <img src={avatar} alt="user" className={css.img} />
          </div>
        </div>
        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>
          {new Intl.NumberFormat('en').format(numOfFollow)} followers
        </p>
        <button
          type="button"
          onClick={this.handleFollow}
          className={
            isFollowing ? `${css.button} ${css.buttonActive}` : css.button
          }
        >
          {isFollowing ? 'following' : 'follow'}
        </button>
      </li>
    );
  }
}
