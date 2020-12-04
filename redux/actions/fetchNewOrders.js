import { fetchOrders } from '../../api';
import { OrderStatus } from '../../enums';
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

const fetchNewOrders = (callback = null) => dispatch => {
    dispatch(fetchNewOrdersStart());
    fetchOrders({
        status: `${OrderStatus.NEW.value},${OrderStatus.RECEIVED.value}`,
        page: 1,
        perPage: 100
    })
        .then(response => dispatch(fetchNewOrdersSuccess(response.data.records)))
        .catch(error => dispatch(fetchNewOrdersFailure(error)))
        .finally(() => {
            if (typeof callback === 'function') {
                callback();
            }
        });
};

export default fetchNewOrders;
