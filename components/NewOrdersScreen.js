import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { fetchNewOrders } from '../redux/actions';
import OrderList from './OrderList';

const NewOrdersScreen = ({ navigation, newOrders, fetchNewOrders }) => {
    useEffect(() => {
        fetchNewOrders();
    }, []);

    if (newOrders.length > 0) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <OrderList navigation={navigation} orders={newOrders} />
            </SafeAreaView>
        );
    }
    return null;
};

const mapStateToProps = ({ newOrders }) => ({ newOrders });
const mapDispatchToProps = { fetchNewOrders };
const ConnectedNewOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(NewOrdersScreen);

export default ConnectedNewOrdersScreen;
