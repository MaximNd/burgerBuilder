import React from 'react';

import styles from './Toolbar.css';
import Logo from './../../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../DrawerToggle/DrawerToggle';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.openedSideDrawler} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

Toolbar.propTypes = {
    openedSideDrawler: PropTypes.func.isRequired
};

export default Toolbar;