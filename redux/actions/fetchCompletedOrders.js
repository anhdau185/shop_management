import { fetchOrders } from '../../api';
import { OrderStatus } from '../../enums';
import {
    FETCH_COMPLETED_ORDERS_START,
    FETCH_COMPLETED_ORDERS_SUCCESS,
    FETCH_COMPLETED_ORDERS_FAILURE
} from './types';

const fetchCompletedOrdersStart = () => ({ type: FETCH_COMPLETED_ORDERS_START });

const fetchCompletedOrdersSuccess = completedOrders => ({
    type: FETCH_COMPLETED_ORDERS_SUCCESS,
    completedOrders
});

const fetchCompletedOrdersFailure = error => ({
    type: FETCH_COMPLETED_ORDERS_FAILURE,
    error
});

const fetchCompletedOrders = (paging, ...callbacks) => dispatch => {
    dispatch(fetchCompletedOrdersStart());
    fetchOrders({
        status: `${OrderStatus.COMPLETED.value},${OrderStatus.CANCELED.value}`,
        page: paging.page,
        perPage: paging.perPage
    })
        .then(response => dispatch(fetchCompletedOrdersSuccess(response.data)))
        .catch(error => dispatch(fetchCompletedOrdersFailure(error)))
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

export default fetchCompletedOrders;
