import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ORDER_LIST_PAGE_SIZE } from '../constants';
import { fetchCompletedOrders, refreshCompletedOrders } from '../redux/actions';
import OrderList from './OrderList';

const CompletedOrdersScreen = ({ navigation, completedOrders, fetchCompletedOrders, refreshCompletedOrders }) => {
    useEffect(() => {
        refreshCompletedOrders();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <OrderList
                navigation={navigation}
                orders={completedOrders ? completedOrders.records : []}
                onRefresh={doneRefreshing => refreshCompletedOrders(doneRefreshing)}
            />
            {completedOrders && completedOrders.page < completedOrders.pages
                ? <View style={styles.bottomAction}>
                    <Button
                        title="Tải thêm"
                        buttonStyle={{ width: 200, borderRadius: 5 }}
                        onPress={() => {
                            fetchCompletedOrders({
                                page: completedOrders.page + 1,
                                perPage: ORDER_LIST_PAGE_SIZE
                            });
                        }}
                    />
                </View>
                : null
            }
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

const mapDispatchToProps = {
    fetchCompletedOrders,
    refreshCompletedOrders
};

const ConnectedCompletedOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(CompletedOrdersScreen);

export default ConnectedCompletedOrdersScreen;
