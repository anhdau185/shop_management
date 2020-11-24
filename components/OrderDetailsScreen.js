import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OrderDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Order details</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OrderDetails;
