import React from 'react';

import styles from './SideDrawer.css';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from './../../../UI/Backdrop/Backdrop';
import PropTypes from 'prop-types';

const SideDrawer = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={`${styles.SideDrawer} ${props.show ? styles.Open : styles.Close}`}>
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