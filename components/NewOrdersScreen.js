import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchNewOrders } from '../redux/actions';
import OrderList from './OrderList';

const NewOrdersScreen = ({ navigation, newOrders, fetchNewOrders }) => {
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchNewOrders({
            page: page,
            perPage: 10
        });
    }, [page]);

    if (newOrders.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <OrderList navigation={navigation} orders={newOrders} />
                <View style={styles.bottomActions}>
                    <Button
                        title={`Tải thêm (current: ${page})`}
                        buttonStyle={{ width: 200, borderRadius: 5 }}
                        onPress={() => setPage(currentPage => currentPage + 1)}
                    />
                </View>
            </SafeAreaView>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomActions: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10
    }
});

const mapStateToProps = ({ newOrders }) => ({ newOrders });
const mapDispatchToProps = { fetchNewOrders };
const ConnectedNewOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(NewOrdersScreen);

export default ConnectedNewOrdersScreen;
