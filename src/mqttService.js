import mqtt from 'mqtt';
import { devices } from './deviceConfig';

const brokerUrl = 'mqtt://your-broker-url:port';
const options = { clientId: 'react-client' };

const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  devices.forEach(device => {
    if (device.topicTemp) client.subscribe(device.topicTemp);
    if (device.topicStatus) client.subscribe(device.topicStatus);
  });
});

export const onMessage = (callback) => {
  client.on('message', (topic, message) => {
    callback(topic, message.toString());
  });
};

export const sendMessage = (topic, message) => {
  client.publish(topic, message);
};

export default client;
