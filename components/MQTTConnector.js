import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { OrderStatus } from '../enums';
import { updateOrder } from '../api';
import mqttConnection from '../mqtt';
import { fetchNewOrders, refreshCompletedOrders, triggerUpdateOrderDetails } from '../redux/actions';

const inAppNotify = () => {
    ToastAndroid.showWithGravityAndOffset(
        'Bạn vừa nhận một đơn hàng mới!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        120
    );
};

const MQTTConnector = ({ fetchNewOrders, refreshCompletedOrders, triggerUpdateOrderDetails }) => {
    useEffect(() => {
        mqttConnection.establish({
            onMessageArrived: message => {
                console.info('Message arrived: ' + message.payloadString);
                const action = JSON.parse(message.payloadString);
                const { type, payload } = action;

                if (type === 'PUSH_NEW_ORDER') {
                    updateOrder({
                        transactionNo: payload.transactionNo,
                        status: OrderStatus.RECEIVED.value,
                        cancelReason: ''
                    })
                        .then(() => fetchNewOrders(inAppNotify))
                        .catch(error => console.error(error));
                } else if (type === 'CANCEL_ORDER') {
                    triggerUpdateOrderDetails(payload.transactionNo);
                    fetchNewOrders();
                    refreshCompletedOrders();
                }
            },
            onConnectionLost: response => {
                if (response.errorCode !== 0) {
                    console.warn('MQTT connection lost: ' + response.errorMessage);
                }
            }
        });

        return () => {
            mqttConnection.close();
        };
    }, []);

    return null;
};

const mapDispatchToProps = {
    fetchNewOrders,
    refreshCompletedOrders,
    triggerUpdateOrderDetails
};

const ConnectedComp = connect(null, mapDispatchToProps)(MQTTConnector);

export default ConnectedComp;
