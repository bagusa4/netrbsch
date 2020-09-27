import { Device, IDevice } from "../Device";
import { launch as puppeteer } from 'puppeteer';

export class WebFig extends Device implements IDevice {
    brand: string = "Mikrotik";
    series: string = "Router";
    webmin: string = "WebFig";
    models: String[] = ["RB941-2nD hAP lite"];

    constructor() {
        super();
    }

    do(commands: Array<String>) {
        for(let command of commands) {
            switch (command) {
                case "login":
                    this.login();
                    break;
                case "reboot":
                    this.reboot();
                    break;

                default:
                    break;
            }
        }
    }

    async login() {
        console.log("Puppetter");
        await 
            puppeteer({headless: false})
            .then(browser => {browser.newPage().then(page => {
                page.goto(`${this.url}`);
            })});
        return this;
    }

    reboot() {
        
    }
}