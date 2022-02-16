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
        for(let rDevice of RDevicesList) {
            if((doDevice.brand == rDevice.brand) && ((doDevice.series == rDevice.series) || (doDevice.webmin == rDevice.webmin))) {
                for(let command of doDevice.commands) {
                    let isAvailableCommands = rDevice.available_commands.filter(c => c.match(command));
                    if(isAvailableCommands !== null) {
                        rDevice.setDoDeviceInformation(doDevice.url, doDevice.username, doDevice.password).do(command);
                    }
                }
            }
        }
    }
})();