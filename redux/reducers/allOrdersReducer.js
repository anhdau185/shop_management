import allOrders from '../../json/orders.json';
import {
    FETCH_ALL_ORDERS_START,
    FETCH_ALL_ORDERS_SUCCESS,
    FETCH_ALL_ORDERS_FAILURE
} from '../actions/types';

const allOrdersReducer = (prevState = allOrders, action) => {
    switch (action.type) {
        case FETCH_ALL_ORDERS_START:
            return prevState;
        case FETCH_ALL_ORDERS_SUCCESS:
            return action.allOrders;
        case FETCH_ALL_ORDERS_FAILURE:
            return prevState;
        default:
            return prevState;
    }
};

export default allOrdersReducer;
