import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import allOrdersReducer from './allOrdersReducer';
import newOrdersReducer from './newOrdersReducer';
import ongoingOrdersReducer from './ongoingOrdersReducer';
import completedOrdersReducer from './completedOrdersReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    allOrders: allOrdersReducer,
    newOrders: newOrdersReducer,
    ongoingOrders: ongoingOrdersReducer,
    completedOrders: completedOrdersReducer
});

export default rootReducer;
