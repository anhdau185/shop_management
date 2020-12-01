import React from 'react';
import { connect } from 'react-redux';
import OrderList from './OrderList';

const CompletedOrdersScreen = ({ navigation, completedOrders }) => (
    /* <OrderList navigation={navigation} orders={[]} /> */null
);

const mapStateToProps = ({ allOrders }) => ({ completedOrders: allOrders });
const ConnectedCompletedOrdersScreen = connect(mapStateToProps)(CompletedOrdersScreen);

export default ConnectedCompletedOrdersScreen;
