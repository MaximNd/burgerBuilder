import React, { Component } from 'react';

import styles from './Layout.css';
import Toolbar from './../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from './../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawlerOpenedHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar openedSideDrawler={this.sideDrawlerOpenedHandler} />
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
};

export default Layout;