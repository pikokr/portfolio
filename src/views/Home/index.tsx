import React, { Component } from 'react';
import * as Button from '../../components/Button';
import classes from './home.module.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={classes.root}>
        <h1 className={classes.name}>파랑이</h1>
        <h2>UniqueCode 소속 개발자</h2>
        <Button.Link to="/about">더 알아보기</Button.Link>
      </div>
    );
  }
}

export default HomePage;
