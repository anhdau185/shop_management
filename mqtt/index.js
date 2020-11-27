import { Buffer } from 'buffer';
import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mqttClientOptions, callbackMessages } from './mqttStaticEntries';

global.Buffer = Buffer;

const establishMQTTConnection = (callbacks) => {
    init({
        size: 10000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        reconnect: true,
        sync: {}
    });

    const client = new Paho.MQTT.Client(mqttClientOptions.HOST, mqttClientOptions.PORT, mqttClientOptions.CLIENT_ID);
    const { onMessageArrived, onConnectionLost } = callbacks;

    client.onMessageArrived = onMessageArrived;
    client.onConnectionLost = onConnectionLost;

    client.connect({
        userName: mqttClientOptions.USERNAME,
        password: mqttClientOptions.PASSWORD,
        onSuccess: () => {
            console.info(callbackMessages.SUCCESS);
            client.subscribe(mqttClientOptions.TOPIC);
        },
        onFailure: () => console.error(callbackMessages.FAILURE)
    });

    global.mqttClient = client;
};

export default establishMQTTConnection;
