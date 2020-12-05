import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import { fetchNewOrders } from '../redux/actions';
import OrderList from './OrderList';

const NewOrdersScreen = ({ navigation, newOrders, fetchNewOrders }) => {
    useEffect(() => {
        fetchNewOrders();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <OrderList
                navigation={navigation}
                orders={newOrders}
                onRefresh={doneRefreshing => fetchNewOrders(doneRefreshing)} />
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
