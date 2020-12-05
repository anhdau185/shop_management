import { fetchOrders } from '../../api';
import { OrderStatus } from '../../enums';
import { ORDER_LIST_INITIAL_PAGE, ORDER_LIST_PAGE_SIZE } from '../../constants';
import {
    REFRESH_COMPLETED_ORDERS_START,
    REFRESH_COMPLETED_ORDERS_SUCCESS,
    REFRESH_COMPLETED_ORDERS_FAILURE
} from './types';

const refreshCompletedOrdersStart = () => ({ type: REFRESH_COMPLETED_ORDERS_START });

const refreshCompletedOrdersSuccess = completedOrders => ({
    type: REFRESH_COMPLETED_ORDERS_SUCCESS,
    completedOrders
});

const refreshCompletedOrdersFailure = error => ({
    type: REFRESH_COMPLETED_ORDERS_FAILURE,
    error
});

const refreshCompletedOrders = (...callbacks) => dispatch => {
    dispatch(refreshCompletedOrdersStart());
    fetchOrders({
        status: `${OrderStatus.COMPLETED.value},${OrderStatus.CANCELED.value}`,
        page: ORDER_LIST_INITIAL_PAGE,
        perPage: ORDER_LIST_PAGE_SIZE
    })
        .then(response => dispatch(refreshCompletedOrdersSuccess(response.data)))
        .catch(error => dispatch(refreshCompletedOrdersFailure(error)))
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

export default refreshCompletedOrders;
