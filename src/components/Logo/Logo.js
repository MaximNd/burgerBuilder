import React from 'react';

import styles from './Logo.css';
import logo from './../../assets/images/burger-logo.png';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={logo} alt="Burger-Logo"/>
        </div>
    );
};

export default Logo;