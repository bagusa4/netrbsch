"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var WebFig_1 = require("./devices/mikrotik/WebFig");
/**
 * Register The Supported Devices
 */
var RDevicesList = [
    new WebFig_1.WebFig,
];
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var doDevicesList, _i, doDevicesList_1, doDevice, _a, RDevicesList_1, device;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, library_1.loadJSON("../devices.json")];
                case 1:
                    doDevicesList = _b.sent();
                    for (_i = 0, doDevicesList_1 = doDevicesList; _i < doDevicesList_1.length; _i++) {
                        doDevice = doDevicesList_1[_i];
                        for (_a = 0, RDevicesList_1 = RDevicesList; _a < RDevicesList_1.length; _a++) {
                            device = RDevicesList_1[_a];
                            if ((doDevice.brand == device.brand) && ((doDevice.series == device.series) || (doDevice.webmin == device.webmin))) {
                                device.setDoDeviceInformation(doDevice.url, doDevice.username, doDevice.password).login();
                            }
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
})();
