import { fetchOrders } from '../../api';
import { OrderStatus } from '../../enums';
import {
    FETCH_ONGOING_ORDERS_START,
    FETCH_ONGOING_ORDERS_SUCCESS,
    FETCH_ONGOING_ORDERS_FAILURE
} from './types';

const fetchOngoingOrdersStart = () => ({ type: FETCH_ONGOING_ORDERS_START });

const fetchOngoingOrdersSuccess = ongoingOrders => ({
    type: FETCH_ONGOING_ORDERS_SUCCESS,
    ongoingOrders
});

const fetchOngoingOrdersFailure = error => ({
    type: FETCH_ONGOING_ORDERS_FAILURE,
    error
});

const fetchOngoingOrders = (paging, ...callbacks) => dispatch => {
    dispatch(fetchOngoingOrdersStart());
    fetchOrders({
        status: `${OrderStatus.CONFIRMED.value},${OrderStatus.AVAILABLE.value}`,
        page: paging.page,
        perPage: paging.perPage
    })
        .then(response => dispatch(fetchOngoingOrdersSuccess(response.data)))
        .catch(error => dispatch(fetchOngoingOrdersFailure(error)))
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

export default fetchOngoingOrders;
