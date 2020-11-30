import { Buffer } from 'buffer';
import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mqttConfigurations from './mqttConfigurations';
import logMessages from './logMessages';

global.Buffer = Buffer;

function establishConnection({ onMessageArrived, onConnectionLost }) {
    init({
        size: 10000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        reconnect: true,
        sync: {}
    });

    const client = new Paho.MQTT.Client(
        mqttConfigurations.HOST,
        mqttConfigurations.PORT,
        mqttConfigurations.CLIENT_ID
    );

    if (typeof onMessageArrived === 'function') {
        client.onMessageArrived = onMessageArrived;
    }

    if (typeof onConnectionLost === 'function') {
        client.onConnectionLost = onConnectionLost;
    }

    client.connect({
        userName: mqttConfigurations.USERNAME,
        password: mqttConfigurations.PASSWORD,
        onSuccess: () => {
            console.info(logMessages.SUCCESS);
            client.subscribe(mqttConfigurations.TOPIC);
        },
        onFailure: () => {
            console.error(logMessages.FAILURE);
        }
    });

    /* Attach the newly created MQTT client to
     * the `global` object for later access to it */
    global.mqttClient = client;
};

function closeConnection() {
    if (global.mqttClient && global.mqttClient.isConnected) {
        console.info(logMessages.CLOSING);
        global.mqttClient.disconnect();
    }
}

const mqttConnection = {
    establish: establishConnection,
    close: closeConnection
};

export default mqttConnection;
