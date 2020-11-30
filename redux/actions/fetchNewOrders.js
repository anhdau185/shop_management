import { fetchOrders } from '../../api';
import {
    FETCH_NEW_ORDERS_START,
    FETCH_NEW_ORDERS_SUCCESS,
    FETCH_NEW_ORDERS_FAILURE
} from './types';

const fetchNewOrdersStart = () => ({ type: FETCH_NEW_ORDERS_START });

const fetchNewOrdersSuccess = response => ({
    type: FETCH_NEW_ORDERS_SUCCESS,
    newOrders: response
});

const fetchNewOrdersFailure = error => ({
    type: FETCH_NEW_ORDERS_FAILURE,
    error
});

const fetchNewOrders = ({ page, perPage }) => dispatch => {
    dispatch(fetchNewOrdersStart());
    fetchOrders({
        status: 'NEW,RECEIVED',
        page,
        perPage
    })
        .then(response => dispatch(fetchNewOrdersSuccess(response)))
        .catch(error => dispatch(fetchNewOrdersFailure(error)));
};

export default fetchNewOrders;
