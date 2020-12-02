import {
    FETCH_ONGOING_ORDERS_START,
    FETCH_ONGOING_ORDERS_SUCCESS,
    FETCH_ONGOING_ORDERS_FAILURE
} from '../actions/types';

const ongoingOrdersReducer = (prevState = null, action) => {
    switch (action.type) {
        case FETCH_ONGOING_ORDERS_START:
            return prevState;
        case FETCH_ONGOING_ORDERS_SUCCESS: {
            if (prevState) {
                let nextState = { ...action.ongoingOrders };
                nextState.records = [
                    ...prevState.records,
                    ...action.ongoingOrders.records
                ];
                return nextState;
            }
            return action.ongoingOrders;
        }
        case FETCH_ONGOING_ORDERS_FAILURE:
            return prevState;
        default:
            return prevState;
    }
};

export default ongoingOrdersReducer;
