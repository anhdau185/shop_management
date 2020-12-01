import React from 'react';
import { View, FlatList } from 'react-native';
import OrderItem from './OrderItem';

const OrderList = ({ navigation, orders }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderItem navigation={navigation} order={item} />}
                keyExtractor={(item, index) => `${index}_${item.transactionNo}`}
            />
        </View>
    );
};

export default OrderList;
