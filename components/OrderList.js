import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import OrderItem from './OrderItem';

const OrderList = ({ navigation, orders }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderItem navigation={navigation} order={item} />}
                keyExtractor={(item, index) => `${index}_${item.transactionNo}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default OrderList;
