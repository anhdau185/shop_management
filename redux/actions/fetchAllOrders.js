import { fetchAllOrders as fetchAllOrdersApi } from '../../api';
import {
    FETCH_ALL_ORDERS_START,
    FETCH_ALL_ORDERS_SUCCESS,
    FETCH_ALL_ORDERS_FAILURE
} from './types';

const fetchAllOrdersStart = () => ({ type: FETCH_ALL_ORDERS_START });

const fetchAllOrdersSuccess = (response) => ({
    type: FETCH_ALL_ORDERS_SUCCESS,
    allOrders: response
});

const fetchAllOrdersFailure = (error) => ({
    type: FETCH_ALL_ORDERS_FAILURE,
    error
});

const fetchAllOrders = () => dispatch => {
    dispatch(fetchAllOrdersStart());
    fetchAllOrdersApi()
        .then(response => dispatch(fetchAllOrdersSuccess(response)))
        .catch(error => dispatch(fetchAllOrdersFailure(error)));
};

export default fetchAllOrders;
