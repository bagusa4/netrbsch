import { Device, IDevice } from "../Device";
import { chromium } from 'playwright';
import type { Browser, BrowserContext, Page } from 'playwright';

export class WebFig extends Device implements IDevice {
    brand: string = "Mikrotik";
    series: string = "Router";
    webmin: string = "WebFig";
    models: String[] = ["RB941-2nD hAP lite"];
    available_commands: String[] = ["login, logout, reboot"];
    browser_context!: BrowserContext

    constructor() {
        super();

        this.setBrowser();
    }

    private async setBrowser() {
        let browser: Browser = await chromium.launch({ headless: false });
        this.browser_context = await browser.newContext()
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
        let page: Page = await this.browser_context.newPage();
        await page.goto(`${this.url}`);
    }

    protected logout() {
    }

    protected reboot() {
    }
}
