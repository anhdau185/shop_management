import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import newOrdersReducer from './newOrdersReducer';
import ongoingOrdersReducer from './ongoingOrdersReducer';
import completedOrdersReducer from './completedOrdersReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    newOrders: newOrdersReducer,
    ongoingOrders: ongoingOrdersReducer,
    completedOrders: completedOrdersReducer
});

export default rootReducer;
