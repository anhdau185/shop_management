import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { orderStatus } from '../enums';
import { getDateTimeFromMilliseconds, getOrderQuantity } from '../helpers';

import FormattedPrice from './FormattedPrice';
import CustomBadge from './CustomBadge';

const OrderItem = ({ navigation, order }) => {
    const getBriefDescription = items => {
        const firstProductName = items[0].productName;
        const remainingCount = items.length - 1;
        let text = firstProductName;
        if (remainingCount > 0) {
            text += ` + ${remainingCount} SP khác`;
        }
        return text;
    };

    const { transactionNo, orderDetails, userName, totalAmount, createdAt, status } = order;

    return (
        <TouchableHighlight
            onPress={() => {
                navigation.navigate(
                    'OrderDetails',
                    { orderId: transactionNo }
                );
            }}
        >
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <View style={styles.orderItem}>
                        <View style={styles.totalQtyContainer}>
                            <View style={styles.totalQtyTextWrapper}>
                                <Text style={styles.totalQtyText}>
                                    {getOrderQuantity(orderDetails)}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text>{transactionNo}</Text>
                            <Text style={styles.userName}>{userName}</Text>
                            <Text style={styles.briefDescription}>
                                {getBriefDescription(orderDetails)}
                            </Text>
                            <FormattedPrice value={totalAmount} style={styles.orderAmount} />
                            <Text style={styles.creationDateTime}>
                                {getDateTimeFromMilliseconds(createdAt)}
                            </Text>
                        </View>
                        <View style={styles.statusContainer}>
                            <CustomBadge
                                text={orderStatus[status].title}
                                backgroundColor={orderStatus[status].indicatorColor}
                            />
                        </View>
                    </View>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        flex: 1,
        flexDirection: 'row'
    },
    totalQtyContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    totalQtyTextWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999',
        borderRadius: 5,
        height: 56,
        width: 56
    },
    totalQtyText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    detailsContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingStart: 8
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    briefDescription: {
        color: '#555'
    },
    orderAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4db856'
    },
    creationDateTime: {
        color: '#555',
        marginTop: 5
    },
    statusContainer: {
        flex: 2,
        alignItems: 'flex-end'
    }
});

export default OrderItem;
