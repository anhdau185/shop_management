import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchOngoingOrders } from '../redux/actions';
import OrderList from './OrderList';

const OngoingOrdersScreen = ({ navigation, ongoingOrders, fetchOngoingOrders }) => {
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchOngoingOrders({
            page,
            perPage: 10
        });
    }, [page]);

    if (ongoingOrders && ongoingOrders.records.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <OrderList
                    navigation={navigation}
                    orders={ongoingOrders.records}
                    onRefresh={fetchOngoingOrders.bind(this, { page: 1, perPage: 10 })}
                />
                {ongoingOrders.page < ongoingOrders.pages
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
                <Text>Chưa có đơn hàng đang thực hiện nào.</Text>
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

const mapStateToProps = ({ ongoingOrders }) => ({ ongoingOrders });
const mapDispatchToProps = { fetchOngoingOrders };
const ConnectedOngoingOrdersScreen = connect(mapStateToProps, mapDispatchToProps)(OngoingOrdersScreen);

export default ConnectedOngoingOrdersScreen;
