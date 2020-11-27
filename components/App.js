import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import establishMQTTConnection from '../mqtt';
import OrdersScreen from './OrdersScreen';
import OrderDetailsScreen from './OrderDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        establishMQTTConnection({
            onMessageArrived: message => {
                console.info('Message arrived: ' + message.payloadString);
                const payload = JSON.parse(message.payloadString);
                setMessage(payload.transactionNo);
            },
            onConnectionLost: response => {
                if (response.errorCode !== 0) {
                    console.error('Connection lost: ' + response.errorMessage);
                }
            }
        });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Orders"
                    component={OrdersScreen}
                    options={{ title: 'Đơn hàng' + message ? ' ' : '' + message }}
                />
                <Stack.Screen
                    name="OrderDetails"
                    component={OrderDetailsScreen}
                    options={{ title: 'Chi tiết đơn hàng' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
