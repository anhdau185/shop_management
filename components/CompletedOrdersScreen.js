import React from 'react';
import orders from '../json/orders.json';
import OrderList from './OrderList';

const CompletedOrdersScreen = ({ navigation }) => {
    return <OrderList navigation={navigation} orders={orders} />;
};

export default CompletedOrdersScreen;
