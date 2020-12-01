import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
// import { fetchOngoingOrders } from '../redux/actions';
import OrderList from './OrderList';

const OngoingOrdersScreen = ({ navigation, ongoingOrders, fetchOngoingOrders }) => {
    /* const [page, setPage] = useState(1);
    useEffect(() => {
        fetchOngoingOrders({
            page: page,
            perPage: 10
        });
    }, [page]);

    if (ongoingOrders.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <OrderList navigation={navigation} orders={ongoingOrders} />
                <View style={styles.bottomActions}>
                    <Button
                        title={`Tải thêm (current: ${page})`}
                        buttonStyle={{ width: 200, borderRadius: 5 }}
                        onPress={() => setPage(currentPage => currentPage + 1)}
                    />
                </View>
            </SafeAreaView>
        );
    } */
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

// const mapStateToProps = ({ ongoingOrders }) => ({ ongoingOrders });
const ConnectedOngoingOrdersScreen = connect(null)(OngoingOrdersScreen);

export default ConnectedOngoingOrdersScreen;
