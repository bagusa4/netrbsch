import { loadJSON } from './library';
import { Device } from './devices/Device';
import { WebFig } from './devices/mikrotik/WebFig';

/**
 * Register The Supported Devices
 */
let RDevicesList: Array<Device> = [
    new WebFig,
];

(async function main() {
    // Read device that would like to do scheduling
    let doDevicesList: any = await loadJSON("../devices.json");

    for(let doDevice of doDevicesList) {
        for(let device of RDevicesList) {
            if((doDevice.brand == device.brand) && ((doDevice.series == device.series) || (doDevice.webmin == device.webmin))) {
                device.setDoDeviceInformation(doDevice.url, doDevice.username, doDevice.password).do(doDevice.commands);
            }
        }
    }
})();