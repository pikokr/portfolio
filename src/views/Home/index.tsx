import React, { Component } from 'react';
import classes from './home.module.scss'

class HomePage extends Component {
    render() {
        return (
            <div className={classes.root}>
                <h1 className={classes.name}>파랑이</h1>
                <h2>UniqueCode 소속 개발자</h2>
            </div>
        );
    }
}

export default HomePage;