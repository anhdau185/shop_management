import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const NewOrdersScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>New orders!</Text>
            <Button
                title="See order details"
                onPress={() => navigation.navigate('OrderDetails')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NewOrdersScreen;
