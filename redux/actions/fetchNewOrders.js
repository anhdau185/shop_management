import { fetchOrders } from '../../api';
import {
    FETCH_NEW_ORDERS_START,
    FETCH_NEW_ORDERS_SUCCESS,
    FETCH_NEW_ORDERS_FAILURE
} from './types';

const fetchNewOrdersStart = () => ({ type: FETCH_NEW_ORDERS_START });

const fetchNewOrdersSuccess = newOrders => ({
    type: FETCH_NEW_ORDERS_SUCCESS,
    newOrders
});

const fetchNewOrdersFailure = error => ({
    type: FETCH_NEW_ORDERS_FAILURE,
    error
});

const fetchNewOrders = () => dispatch => {
    dispatch(fetchNewOrdersStart());
    fetchOrders({
        status: 'NEW,RECEIVED',
        page: 1,
        perPage: 100
    })
        .then(response => dispatch(fetchNewOrdersSuccess(response.data.records)))
        .catch(error => dispatch(fetchNewOrdersFailure(error)));
};

export default fetchNewOrders;
