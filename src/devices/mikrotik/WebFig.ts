import { Device, IDevice } from "../Device";
import { launch as puppeteer } from 'puppeteer';

export class WebFig extends Device implements IDevice {
    brand: string = "Mikrotik";
    series: string = "Router";
    webmin: string = "WebFig";
    models: String[] = ["RB941-2nD hAP lite"];
    available_commands: String[] = ["login, logout, reboot"];

    constructor() {
        super();
    }

    do(command: string) {
        switch (command) {
            case "login":
                this.login();
                break;
            case "logout":
                this.logout();
                break;
            case "reboot":
                this.reboot();
                break;

            default:
                throw console.error("Oops Commands was not Found !!!!");
        }
    }

    protected async login() {
        console.log("Puppetter");
        await 
            puppeteer({headless: false})
            .then(browser => {browser.newPage().then(page => {
                page.goto(`${this.url}`);
            })});
    }

    protected logout() {
    }

    protected reboot() {
    }
}