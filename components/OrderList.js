import React from 'react';
import { FlatList } from 'react-native';
import OrderItem from './OrderItem';

const OrderList = ({ navigation, orders }) => {
    return (
        <FlatList
            data={orders}
            renderItem={({ item }) => <OrderItem navigation={navigation} orderData={item.data} />}
            keyExtractor={item => item.data.transactionNo}
        />
    );
};

export default OrderList;
