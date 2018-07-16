import React from 'react';

import styles from './Modal.css';
import Backdrop from './../Backdrop/Backdrop';

const Modal = (props) => {
    const animationClass = props.show ? styles['Modal-appear'] : styles['Modal-hide'];
    return (
        <React.Fragment>
            <Backdrop 
                show={props.show}
                clicked={props.ModalClosed} />
            <div className={`${styles.Modal} ${animationClass}`}>
                {props.children}
            </div>

        </React.Fragment>
    );
};

export default Modal;