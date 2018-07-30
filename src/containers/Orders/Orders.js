import React, { Component } from 'react';
import axios from './../../axios-orders';

import Order from './../../components/Order/Order';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(({data}) => {
                this.setState({ orders: data, loading: false });
            })
            .catch(err => {
                this.setState({loading: false });
            });
    }

    render() {
        let orders = [];
        if (this.state.loading) {
            orders = <Spinner />;
        } else {
            for (let key in this.state.orders) {
                orders.push(<Order ingredients={this.state.orders[key].ingredients} price={this.state.orders[key].price} key={key} />);
            }
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);