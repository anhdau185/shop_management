import React from 'react';
import { connect } from 'react-redux';
import OrderList from './OrderList';

const NewOrdersScreen = ({ navigation, newOrders }) => (
    <OrderList navigation={navigation} orders={newOrders} />
);

const mapStateToProps = ({ allOrders }) => ({ newOrders: allOrders });
const ConnectedNewOrdersScreen = connect(mapStateToProps)(NewOrdersScreen);

export default ConnectedNewOrdersScreen;
