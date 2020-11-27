import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {}
});

function onConnectionLost(response) {
    if (response.errorCode !== 0) {
        console.log('Connection lost: ' + response.errorMessage);
    }
}

function onMessageArrived(message) {
    console.log('Message arrived: ' + message.payloadString);
}

function onConnectionEstablished() {
    console.log('MQTT connection established!');
    client.subscribe('dom/order');
}

const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 1883, 'clientId-tvSPVqVcYOz');
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

export function establishMQTTConnection() {
    client.connect({
        userName: 'mqtt_admin',
        password: '123456',
        onSuccess: onConnectionEstablished
    });
};

export function closeMQTTConnection() {
    console.log('MQTT connection about to close...');
    client.disconnect();
};

const mqttConnection = {
    establish: establishMQTTConnection,
    close: closeMQTTConnection
};

export default mqttConnection;
