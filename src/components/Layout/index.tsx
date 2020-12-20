import React, { Component } from 'react';
import Header from './Header';

class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                {this.props.children}
            </>
        );
    }
}

export default Layout;