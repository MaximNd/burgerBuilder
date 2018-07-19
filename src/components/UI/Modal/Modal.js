import React from 'react';

import styles from './Modal.css';
import Backdrop from './../Backdrop/Backdrop';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const animationClass = props.show ? styles['Modal-appear'] : styles['Modal-hide'];
    return (
        <React.Fragment>
            <Backdrop 
                show={props.show}
                clicked={props.modalClosed} />
            <div className={`${styles.Modal} ${animationClass}`}>
                {props.children}
            </div>

        </React.Fragment>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    modalClosed: PropTypes.func.isRequired
};

export default Modal;