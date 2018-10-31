import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from './../../axios-orders';

import Order from './../../components/Order/Order';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler'
import * as actions from './../../store/actions';

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = [];
        if (this.props.loading) {
            orders = <Spinner />;
        } else {
            for (let key in this.props.orders) {
                orders.push(<Order ingredients={this.props.orders[key].ingredients} price={this.props.orders[key].price} key={key} />);
            }
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    loading: state.orders.loading
});

const mapDispatchToProps = dispatch => ({
    onFetchOrders: () => dispatch(actions.fetchOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));