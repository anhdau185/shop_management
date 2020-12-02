import React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NewOrdersScreen from './NewOrdersScreen';
import OngoingOrdersScreen from './OngoingOrdersScreen';
import CompletedOrdersScreen from './CompletedOrdersScreen';

const Tab = createBottomTabNavigator();

const OrdersScreen = ({ newOrdersCount, ongoingOrdersCount, completedOrdersCount }) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    if (route.name === 'New') {
                        return <MaterialIcons name="new-releases" size={size} color={color} />;
                    }
                    if (route.name === 'Ongoing') {
                        return <MaterialCommunityIcons name="progress-clock" size={size} color={color} />;
                    }
                    if (route.name === 'Completed') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
                                size={size}
                                color={color}
                            />
                        );
                    }
                }
            })}
        >
            <Tab.Screen
                name="New"
                component={NewOrdersScreen}
                options={newOrdersCount > 0
                    ? {
                        tabBarBadge: newOrdersCount,
                        title: 'Mới'
                    }
                    : { title: 'Mới' }
                }
            />
            <Tab.Screen
                name="Ongoing"
                component={OngoingOrdersScreen}
                options={ongoingOrdersCount > 0
                    ? {
                        tabBarBadge: ongoingOrdersCount,
                        title: 'Đang thực hiện'
                    }
                    : { title: 'Đang thực hiện' }
                }
            />
            <Tab.Screen
                name="Completed"
                component={CompletedOrdersScreen}
                options={completedOrdersCount > 0
                    ? {
                        tabBarBadge: completedOrdersCount,
                        title: 'Đã hoàn thành'
                    }
                    : { title: 'Đã hoàn thành' }
                }
            />
        </Tab.Navigator>
    );
};

const mapStateToProps = ({ newOrders, ongoingOrders, completedOrders }) => ({
    newOrdersCount: newOrders.length,
    ongoingOrdersCount: ongoingOrders ? ongoingOrders.records.length : 0,
    completedOrdersCount: completedOrders ? completedOrders.records.length : 0
});

const ConnectedOrdersScreen = connect(mapStateToProps)(OrdersScreen);

export default ConnectedOrdersScreen;
