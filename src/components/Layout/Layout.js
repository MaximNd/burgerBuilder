import React from 'react';
import styles from './Layout.css';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>
            
            </div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;