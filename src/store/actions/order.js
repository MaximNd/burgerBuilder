import * as actionTypes from './actionsTypes';
import axios from './../../axios-orders';

const fetchOrdersSuccess = orders => ({
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
});

const fetchOrdersFail = error => ({
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
});

const fetchOrdersStart = () => ({
    type: actionTypes.FETCH_ORDERS_START
});

export const fetchOrders = () => 
                            dispatch => {
                                dispatch(fetchOrdersStart());
                                axios.get('/orders.json')
                                    .then(({data}) => {
                                        dispatch(fetchOrdersSuccess(data));
                                    })
                                    .catch(err => {
                                        dispatch(fetchOrdersFail(err));
                                    });
                            };