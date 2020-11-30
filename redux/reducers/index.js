import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import allOrdersReducer from './allOrdersReducer';
import newOrdersReducer from './newOrdersReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    allOrders: allOrdersReducer,
    newOrders: newOrdersReducer
});

export default rootReducer;
