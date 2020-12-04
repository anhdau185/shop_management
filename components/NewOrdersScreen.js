import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { fetchNewOrders } from '../redux/actions';
import OrderList from './OrderList';

const NewOrdersScreen = ({ navigation, newOrders, fetchNewOrders }) => {
    useEffect(() => {
        fetchNewOrders();
    }, []);

    if (newOrders.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <OrderList navigation={navigation} orders={newOrders} onRefresh={fetchNewOrders} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Chưa có đơn hàng mới nào.</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = ({ newOrders }) => ({ newOrders });
const mapDispatchToProps = { fetchNewOrders };
const ConnectedNewOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(NewOrdersScreen);

export default ConnectedNewOrdersScreen;
