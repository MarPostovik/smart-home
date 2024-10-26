import React, { useEffect, useState } from 'react';
import { sendMessage, onMessage } from '../../mqttService';

const DeviceControl = ({ device }) => {
  const [status, setStatus] = useState('OFF');

  useEffect(() => {
    onMessage((topic, message) => {
      if (topic === device.topicStatus) {
        setStatus(message);
      }
    });
  }, [device]);

  const handleToggle = () => {
    const newStatus = status === 'ON' ? 'OFF' : 'ON';
    sendMessage(device.topicControl, newStatus);
    setStatus(newStatus);
  };

  return (
    <div>
      <h2>{device.name}</h2>
      <p>Статус: {status}</p>
      {device.topicControl && <button onClick={handleToggle}>
        {status === 'ON' ? 'Вимкнути' : 'Увімкнути'}
      </button>}
    </div>
  );
};

export default DeviceControl;
