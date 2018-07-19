import React from 'react';

import styles from './SideDrawer.css';
import Logo from './../../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from './../../../UI/Backdrop/Backdrop';
import PropTypes from 'prop-types';

const SideDrawer = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={`${styles.SideDrawer} ${props.show ? styles.Open : styles.Close}`}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

SideDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    closed: PropTypes.func.isRequired
};

export default SideDrawer;