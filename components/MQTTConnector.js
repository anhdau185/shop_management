import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { OrderStatus } from '../enums';
import { updateOrder } from '../api';
import mqttConnection from '../mqtt';
import { fetchNewOrders } from '../redux/actions';

const inAppNotify = () => {
    ToastAndroid.showWithGravityAndOffset(
        'Bạn vừa nhận một đơn hàng mới!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        120
    );
};

const MQTTConnector = ({ fetchNewOrders }) => {
    useEffect(() => {
        mqttConnection.establish({
            onMessageArrived: message => {
                console.info('Message arrived: ' + message.payloadString);
                const action = JSON.parse(message.payloadString);
                if (action.type === 'PUSH_NEW_ORDER') {
                    updateOrder({
                        transactionNo: action.payload.transactionNo,
                        status: OrderStatus.RECEIVED.value,
                        cancelReason: ''
                    })
                        .then(() => fetchNewOrders(inAppNotify))
                        .catch(error => console.error(error));
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

const mapDispatchToProps = { fetchNewOrders };
const ConnectedComp = connect(null, mapDispatchToProps)(MQTTConnector);

export default ConnectedComp;
