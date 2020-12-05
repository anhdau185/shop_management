import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ORDER_LIST_PAGE_SIZE } from '../constants';
import { fetchOngoingOrders, refreshOngoingOrders } from '../redux/actions';
import OrderList from './OrderList';

const OngoingOrdersScreen = ({ navigation, ongoingOrders, fetchOngoingOrders, refreshOngoingOrders }) => {
    useEffect(() => {
        refreshOngoingOrders();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <OrderList
                navigation={navigation}
                orders={ongoingOrders ? ongoingOrders.records : []}
                onRefresh={doneRefreshing => refreshOngoingOrders(doneRefreshing)}
            />
            {ongoingOrders && ongoingOrders.page < ongoingOrders.pages
                ? <View style={styles.bottomAction}>
                    <Button
                        title="Tải thêm"
                        buttonStyle={{ width: 200, borderRadius: 5 }}
                        onPress={() => {
                            fetchOngoingOrders({
                                page: ongoingOrders.page + 1,
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

const mapStateToProps = ({ ongoingOrders }) => ({ ongoingOrders });

const mapDispatchToProps = {
    fetchOngoingOrders,
    refreshOngoingOrders
};

const ConnectedOngoingOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(OngoingOrdersScreen);

export default ConnectedOngoingOrdersScreen;
