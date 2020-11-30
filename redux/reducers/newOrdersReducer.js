import {
    FETCH_NEW_ORDERS_START,
    FETCH_NEW_ORDERS_SUCCESS,
    FETCH_NEW_ORDERS_FAILURE,
    PUSH_NEW_ORDER_START,
    PUSH_NEW_ORDER_SUCCESS,
    PUSH_NEW_ORDER_FAILURE
} from '../actions/types';

const newOrdersReducer = (prevState = [], action) => {
    switch (action.type) {
        case FETCH_NEW_ORDERS_START:
            return prevState;
        case FETCH_NEW_ORDERS_SUCCESS:
            return [...prevState, ...action.newOrders];
        case FETCH_NEW_ORDERS_FAILURE:
            return prevState;
        case PUSH_NEW_ORDER_START:
            return prevState;
        case PUSH_NEW_ORDER_SUCCESS:
            return [action.newOrder, ...prevState];
        case PUSH_NEW_ORDER_FAILURE:
            return prevState;
        default:
            return prevState;
    }
};

export default newOrdersReducer;
