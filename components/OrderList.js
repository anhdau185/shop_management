import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import OrderItem from './OrderItem';

const OrderList = ({ navigation, orders, onRefresh = null }) => {
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        if (refreshing && typeof onRefresh === 'function') {
            onRefresh(() => setRefreshing(false));
        }
    }, [refreshing]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderItem navigation={navigation} order={item} />}
                keyExtractor={(item, index) => `${index}_${item.transactionNo}`}
                refreshing={refreshing}
                onRefresh={() => setRefreshing(true)}
            />
        </View>
    );
};

export default OrderList;
