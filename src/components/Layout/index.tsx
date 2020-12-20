import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import classes from './Layout.module.scss'

class Layout extends Component {
    render() {
        return (
            <div className={classes.pageContainer}>
                <Header/>
                <div className={classes.container}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;