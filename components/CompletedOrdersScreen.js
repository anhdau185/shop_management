import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchCompletedOrders } from '../redux/actions';
import OrderList from './OrderList';

const CompletedOrdersScreen = ({ navigation, completedOrders, fetchCompletedOrders }) => {
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchCompletedOrders({
            page,
            perPage: 10
        });
    }, [page]);

    if (completedOrders && completedOrders.records.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <OrderList navigation={navigation} orders={completedOrders.records} />
                {
                    completedOrders.page < completedOrders.pages
                        ? <View style={styles.bottomAction}>
                            <Button
                                title="Tải thêm"
                                buttonStyle={{ width: 200, borderRadius: 5 }}
                                onPress={() => setPage(currentPage => currentPage + 1)}
                            />
                        </View>
                        : null
                }
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Chưa có đơn hàng đã hoàn thành nào.</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomAction: {
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#c3c3c3'
    }
});

const mapStateToProps = ({ completedOrders }) => ({ completedOrders });
const mapDispatchToProps = { fetchCompletedOrders };
const ConnectedCompletedOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(CompletedOrdersScreen);

export default ConnectedCompletedOrdersScreen;
