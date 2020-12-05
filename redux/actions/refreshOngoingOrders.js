import { fetchOrders } from '../../api';
import { OrderStatus } from '../../enums';
import { ORDER_LIST_INITIAL_PAGE, ORDER_LIST_PAGE_SIZE } from '../../constants';
import {
    REFRESH_ONGOING_ORDERS_START,
    REFRESH_ONGOING_ORDERS_SUCCESS,
    REFRESH_ONGOING_ORDERS_FAILURE
} from './types';

const refreshOngoingOrdersStart = () => ({ type: REFRESH_ONGOING_ORDERS_START });

const refreshOngoingOrdersSuccess = ongoingOrders => ({
    type: REFRESH_ONGOING_ORDERS_SUCCESS,
    ongoingOrders
});

const refreshOngoingOrdersFailure = error => ({
    type: REFRESH_ONGOING_ORDERS_FAILURE,
    error
});

const refreshOngoingOrders = (...callbacks) => dispatch => {
    dispatch(refreshOngoingOrdersStart());
    fetchOrders({
        status: `${OrderStatus.CONFIRMED.value},${OrderStatus.AVAILABLE.value}`,
        page: ORDER_LIST_INITIAL_PAGE,
        perPage: ORDER_LIST_PAGE_SIZE
    })
        .then(response => dispatch(refreshOngoingOrdersSuccess(response.data)))
        .catch(error => dispatch(refreshOngoingOrdersFailure(error)))
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

export default refreshOngoingOrders;
