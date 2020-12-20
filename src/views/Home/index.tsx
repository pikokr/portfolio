import React, { Component } from 'react';
import classes from './home.module.scss'

class HomePage extends Component {
    render() {
        return (
            <div className={classes.root}>
                <h1>파랑이</h1>
            </div>
        );
    }
}

export default HomePage;