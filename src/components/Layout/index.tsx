import React, { Component } from 'react';
import Header from './Header';
import classes from './Layout.module.scss'

class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                <div style={{height: 80}}/>
                <div className={classes.container}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Layout;