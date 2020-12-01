import React from 'react';
import { connect } from 'react-redux';
import OrderList from './OrderList';

const OngoingOrdersScreen = ({ navigation, ongoingOrders }) => (
    /* <OrderList navigation={navigation} orders={[]} /> */null
);

const mapStateToProps = ({ allOrders }) => ({ ongoingOrders: allOrders });
const ConnectedOngoingOrdersScreen = connect(mapStateToProps)(OngoingOrdersScreen);

export default ConnectedOngoingOrdersScreen;
