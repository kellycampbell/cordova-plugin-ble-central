interface BluetoothLowEnergy {

  // TODO(kellyc): try to close in the any types
  scan(services: any, seconds: number, success: (data: any) => any, failure: (err: any) => any): void;  
  startScan(services: any, success: () => any, failure: () => any): void;
  stopScan(services: any, success: () => any, failure: () => any): void;
  list(success: () => any, failure: () => any): void;
  connect(device_id: any, success: () => any, failure: () => any): void;
  disconnect(device_id: any, success: () => any, failure: () => any): void;
  read(device_id: any, service_uuid: string, characteristic_uuid: string, success: () => any, failure: () => any): void;
  write(device_id: any, service_uuid: string, characteristic_uuid: string, value: any, success: () => any, failure: () => any): void;
  writeWithoutRepsonse(device_id: any, service_uuid: string, characteristic_uuid: string, value: any, success: () => any, failure: () => any): void;
  writeCommand(device_id: any, service_uuid: string, characteristic_uuid: string, value: any, success: () => any, failure: () => any): void;
  notify(device_id: any, service_uuid: string, characteristic_uuid: string, success: () => any, failure: () => any): void;
  startNotification(device_id: any, service_uuid: string, characteristic_uuid: string, success: () => any, failure: () => any): void;
  stopNotification(device_id: any, service_uuid: string, characteristic_uuid: string, success: () => any, failure: () => any): void;
  isConnected(device_id: any, success: () => any, failure: () => any): void;
  isEnabled(success: () => any, failure: () => any): void;
  enable(success: () => any, failure: () => any): void;
  showBluetoothSettings(success: () => any, failure: () => any): void;
}

interface Window {
  ble: BluetoothLowEnergy
}

declare var ble: BluetoothLowEnergy;