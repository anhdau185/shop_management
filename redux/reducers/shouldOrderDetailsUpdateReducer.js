import { TRIGGER_UPDATE_ORDER_DETAILS } from '../actions/types';

const shouldOrderDetailsUpdateReducer = (prevState = null, action) => {
    switch (action.type) {
        case TRIGGER_UPDATE_ORDER_DETAILS:
            return action.orderId;
        default:
            return prevState;
    }
};

export default shouldOrderDetailsUpdateReducer;
