import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss'

const Header = () => {
    return (
        <div className={classes.container}>
            <h2>헤더</h2>
            <div style={{flexGrow: 1}}/>
            <ul className={classes.menuContainer}>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;