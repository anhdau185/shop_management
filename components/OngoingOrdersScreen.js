import React from 'react';
import orders from '../json/orders.json';
import OrderList from './OrderList';

const OngoingOrdersScreen = ({ navigation }) => {
    return <OrderList navigation={navigation} orders={orders} />;
};

export default OngoingOrdersScreen;
