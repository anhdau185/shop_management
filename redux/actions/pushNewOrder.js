
import { fetchOrder } from '../../api';
import {
    PUSH_NEW_ORDER_START,
    PUSH_NEW_ORDER_SUCCESS,
    PUSH_NEW_ORDER_FAILURE
} from './types';

const pushNewOrderStart = () => ({ type: PUSH_NEW_ORDER_START });

const pushNewOrderSuccess = response => ({
    type: PUSH_NEW_ORDER_SUCCESS,
    newOrder: response
});

const pushNewOrderFailure = error => ({
    type: PUSH_NEW_ORDER_FAILURE,
    error
});

const pushNewOrder = orderId => dispatch => {
    dispatch(pushNewOrderStart());
    fetchOrder(orderId)
        .then(response => dispatch(pushNewOrderSuccess(response)))
        .catch(error => dispatch(pushNewOrderFailure(error)));
};

export default pushNewOrder;
