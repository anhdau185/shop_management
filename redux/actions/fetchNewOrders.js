import { fetchOrders } from '../../api';
import { OrderStatus } from '../../enums';
import { NEW_ORDER_LIST_PAGE_SIZE, ORDER_LIST_INITIAL_PAGE } from '../../constants';
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

const fetchNewOrders = (...callbacks) => dispatch => {
    dispatch(fetchNewOrdersStart());
    fetchOrders({
        status: `${OrderStatus.NEW.value},${OrderStatus.RECEIVED.value}`,
        page: ORDER_LIST_INITIAL_PAGE,
        perPage: NEW_ORDER_LIST_PAGE_SIZE
    })
        .then(response => dispatch(fetchNewOrdersSuccess(response.data.records)))
        .catch(error => dispatch(fetchNewOrdersFailure(error)))
        .finally(() => {
            if (callbacks) {
                callbacks.forEach(callback => {
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
        });
};

export default fetchNewOrders;
