"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');
// Application code starts here
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var ngx_onsenui_1 = require("ngx-onsenui");
var app_1 = require("./app/app");
// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ngx_onsenui_1.OnsenModule,
                http_1.HttpModule,
            ],
            declarations: [
                app_1.MyApp,
            ],
            bootstrap: [
                app_1.MyApp,
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA,
            ]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)["catch"](function (err) { return console.error(err); });
