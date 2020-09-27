export interface IDevice {
    brand: string;
    series: string;
    webmin: string;
    models: Array<String>;
    url: string;
    username: string;
    password: string;
    login(): any;
    reboot(): any;
}

export abstract class Device implements IDevice {
    brand: string = "General";
    series: string = "General";
    webmin: string = "General";
    models: String[] = ["General"];
    url: string = "";
    username: string = "";
    password: string = "";

    constructor() {
    }

    abstract login(): any;
    abstract reboot(): any;

    getDeviceInformation(): any {
        return [
            this.brand,
            this.series,
            this.webmin,
            this.models
        ]
    }

    setDoDeviceInformation(url: string, username: string, password: string): Device {
        this.url = url;
        this.username = username;
        this.password = password;

        return this;
    }
}