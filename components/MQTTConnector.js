import { useEffect } from 'react';
import { connect } from 'react-redux';
import { pushNewOrder } from '../redux/actions';
import mqttConnection from '../mqtt';

const MQTTConnector = ({ pushNewOrder }) => {
    useEffect(() => {
        mqttConnection.establish({
            onMessageArrived: message => {
                console.info('Message arrived: ' + message.payloadString);
                // const action = JSON.parse(message.payloadString);
                // const { type, payload } = action;
                // if (type === 'PUSH_NEW_ORDER') {
                //     pushNewOrder(payload.transactionNo);
                // }
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

const mapDispatchToProps = { pushNewOrder };
const ConnectedComp = connect(null, mapDispatchToProps)(MQTTConnector);

export default ConnectedComp;
