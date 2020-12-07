import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import newOrdersReducer from './newOrdersReducer';
import ongoingOrdersReducer from './ongoingOrdersReducer';
import completedOrdersReducer from './completedOrdersReducer';
import shouldOrderDetailsUpdateReducer from './shouldOrderDetailsUpdateReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    newOrders: newOrdersReducer,
    ongoingOrders: ongoingOrdersReducer,
    completedOrders: completedOrdersReducer,
    shouldOrderDetailsUpdate: shouldOrderDetailsUpdateReducer
});

export default rootReducer;
