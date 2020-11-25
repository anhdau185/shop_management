import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import allOrdersReducer from './allOrdersReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    allOrders: allOrdersReducer
});

export default rootReducer;
