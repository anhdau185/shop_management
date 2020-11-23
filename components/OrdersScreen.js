import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NewOrdersScreen from './NewOrdersScreen';
import OngoingOrdersScreen from './OngoingOrdersScreen';
import CompletedOrdersScreen from './CompletedOrdersScreen';

const Tab = createBottomTabNavigator();

const OrdersScreen = () => {
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
            <Tab.Screen name="New" component={NewOrdersScreen} options={{ tabBarBadge: 16 }} />
            <Tab.Screen name="Ongoing" component={OngoingOrdersScreen} options={{ tabBarBadge: 1 }} />
            <Tab.Screen name="Completed" component={CompletedOrdersScreen} options={{ tabBarBadge: 9 }} />
        </Tab.Navigator>
    );
};

export default OrdersScreen;
