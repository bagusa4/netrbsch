"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
var Device = /** @class */ (function () {
    function Device() {
        this.brand = "General";
        this.series = "General";
        this.webmin = "General";
        this.models = ["General"];
        this.url = "";
        this.username = "";
        this.password = "";
    }
    Device.prototype.getDeviceInformation = function () {
        return [
            this.brand,
            this.series,
            this.webmin,
            this.models
        ];
    };
    Device.prototype.setDoDeviceInformation = function (url, username, password) {
        this.url = url;
        this.username = username;
        this.password = password;
        return this;
    };
    return Device;
}());
exports.Device = Device;
