import React from 'react';
import { devices } from '../../deviceConfig';
import DeviceControl from '../DeviceControl/DeviceControl';

function App() {
  return (
    <div className="App">
      <h1>Розумний дім: Моніторинг і управління</h1>
      {devices.map(device => (
        <DeviceControl key={device.id} device={device} />
      ))}
    </div>
  );
}

export default App;

