import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrdersScreen from './OrdersScreen';
import OrderDetailsScreen from './OrderDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Orders" component={OrdersScreen} />
                <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
