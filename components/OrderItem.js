import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getDateTimeFromMilliseconds } from '../helpers';
import FormattedPrice from './FormattedPrice';

const OrderItem = ({ navigation, orderData }) => {
    const getOrderQuantity = (items, countComboProducts = true) => {
        let result = 0;
        items.forEach(item => {
            if (item.productType === 'Combo') {
                if (countComboProducts) {
                    item.products.forEach(product => {
                        result += product.quantity;
                    });
                } else {
                    result += item.quantity;
                }
            } else if (item.productType === 'Product') {
                result += item.quantity;
            }
        });
        return result;
    };

    const getBriefDescription = items => {
        const firstProductName = items[0].productName;
        const remainingCount = items.length - 1;
        let text = firstProductName;
        if (remainingCount > 0) {
            text += ` and ${remainingCount} more`;
        }
        return text;
    };

    const getLatestStatus = orderAudits => {
        const latestStatusObj = orderAudits[orderAudits.length - 1];
        return latestStatusObj.status;
    };

    return (
        <TouchableHighlight onPress={() => navigation.navigate('OrderDetails')}>
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <View style={styles.orderItem}>
                        <View style={styles.totalQtyContainer}>
                            <View style={styles.totalQtyTextWrapper}>
                                <Text style={styles.totalQtyText}>
                                    {getOrderQuantity(orderData.orderDetails)}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.userName}>{orderData.userName}</Text>
                            <Text style={styles.briefDescription}>
                                {getBriefDescription(orderData.orderDetails)}
                            </Text>
                            <FormattedPrice value={orderData.totalAmount} style={styles.orderAmount} />
                            <Text style={styles.creationDateTime}>
                                {getDateTimeFromMilliseconds(orderData.createdAt)}
                            </Text>
                        </View>
                        <View style={styles.statusContainer}>
                            <View style={styles.statusTextWrapper}>
                                <Text style={styles.statusText}>
                                    {getLatestStatus(orderData.orderAudits)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ListItem.Content>
                <ListItem.Chevron color="#666" size={28} />
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
        backgroundColor: '#4db856',
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
        paddingStart: 6
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
        color: '#d64e25'
    },
    creationDateTime: {
        color: '#555',
        marginTop: 5
    },
    statusContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    statusTextWrapper: {
        backgroundColor: '#4db856',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4
    },
    statusText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default OrderItem;
