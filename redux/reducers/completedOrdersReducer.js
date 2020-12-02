import {
    FETCH_COMPLETED_ORDERS_START,
    FETCH_COMPLETED_ORDERS_SUCCESS,
    FETCH_COMPLETED_ORDERS_FAILURE
} from '../actions/types';

const completedOrdersReducer = (prevState = null, action) => {
    switch (action.type) {
        case FETCH_COMPLETED_ORDERS_START:
            return prevState;
        case FETCH_COMPLETED_ORDERS_SUCCESS: {
            if (prevState) {
                let nextState = { ...action.completedOrders };
                nextState.records = [
                    ...prevState.records,
                    ...action.completedOrders.records
                ];
                return nextState;
            }
            return action.completedOrders;
        }
        case FETCH_COMPLETED_ORDERS_FAILURE:
            return prevState;
        default:
            return prevState;
    }
};

export default completedOrdersReducer;
