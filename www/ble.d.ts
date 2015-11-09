interface BluetoothLowEnergy {

  // TODO(kellyc): try to close in the any types
  scan(services: any, seconds: number, success: (result: any) => any, failure: (error: any) => any): void;  
  startScan(services: any, success: (result: any) => any, failure: (error: any) => any): void;
  stopScan(services: any, success: (result: any) => any, failure: (error: any) => any): void;
  list(success: (result: any) => any, failure: (error: any) => any): void;
  connect(device_id: any, success: (result: any) => any, failure: (error: any) => any): void;
  disconnect(device_id: any, success: (result: any) => any, failure: (error: any) => any): void;
  read(device_id: any, service_uuid: string, characteristic_uuid: string, success: (result: any) => any, failure: (error: any) => any): void;
  write(device_id: any, service_uuid: string, characteristic_uuid: string, value: any, success: (result: any) => any, failure: (error: any) => any): void;
  writeWithoutRepsonse(device_id: any, service_uuid: string, characteristic_uuid: string, value: any, success: (result: any) => any, failure: (error: any) => any): void;
  writeCommand(device_id: any, service_uuid: string, characteristic_uuid: string, value: any, success: (result: any) => any, failure: (error: any) => any): void;
  notify(device_id: any, service_uuid: string, characteristic_uuid: string, success: (result: any) => any, failure: (error: any) => any): void;
  startNotification(device_id: any, service_uuid: string, characteristic_uuid: string, success: (result: any) => any, failure: (error: any) => any): void;
  stopNotification(device_id: any, service_uuid: string, characteristic_uuid: string, success: (result: any) => any, failure: (error: any) => any): void;
  isConnected(device_id: any, success: (result: any) => any, failure: (error: any) => any): void;
  isEnabled(success: (result: any) => any, failure: (error: any) => any): void;
  enable(success: (result: any) => any, failure: (error: any) => any): void;
  showBluetoothSettings(success: (result: any) => any, failure: (error: any) => any): void;
}

declare var ble: BluetoothLowEnergy;

interface Window {
  ble: BluetoothLowEnergy
}

