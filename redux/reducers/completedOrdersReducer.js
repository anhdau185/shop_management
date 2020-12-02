import {
    FETCH_COMPLETED_ORDERS_START,
    FETCH_COMPLETED_ORDERS_SUCCESS,
    FETCH_COMPLETED_ORDERS_FAILURE
} from '../actions/types';

const completedOrdersReducer = (prevState = [], action) => {
    switch (action.type) {
        case FETCH_COMPLETED_ORDERS_START:
            return prevState;
        case FETCH_COMPLETED_ORDERS_SUCCESS:
            return [...prevState, ...action.completedOrders];
        case FETCH_COMPLETED_ORDERS_FAILURE:
            return prevState;
        default:
            return prevState;
    }
};

export default completedOrdersReducer;
