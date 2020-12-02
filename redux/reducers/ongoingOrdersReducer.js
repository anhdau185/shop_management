import {
    FETCH_ONGOING_ORDERS_START,
    FETCH_ONGOING_ORDERS_SUCCESS,
    FETCH_ONGOING_ORDERS_FAILURE
} from '../actions/types';

const ongoingOrdersReducer = (prevState = [], action) => {
    switch (action.type) {
        case FETCH_ONGOING_ORDERS_START:
            return prevState;
        case FETCH_ONGOING_ORDERS_SUCCESS:
            return [...prevState, ...action.ongoingOrders];
        case FETCH_ONGOING_ORDERS_FAILURE:
            return prevState;
        default:
            return prevState;
    }
};

export default ongoingOrdersReducer;
