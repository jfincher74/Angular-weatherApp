"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ForecastComponent_1 = require("../components/forecast/ForecastComponent");
var CurrentWeatherComponent_1 = require("../components/currentweather/CurrentWeatherComponent");
var AppComponent = (function () {
    function AppComponent(_forecast, _current) {
        this._forecast = _forecast;
    }
    AppComponent.prototype.getWeather = function (zip) {
        this._current.getWeather();
    };
    AppComponent.prototype.getForecast = function (zip) {
        this._forecast.getForecast();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [ForecastComponent_1.ForecastComponent, CurrentWeatherComponent_1.CurrentWeatherComponent]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ForecastComponent_1.ForecastComponent !== "undefined" && ForecastComponent_1.ForecastComponent) === "function" && _a || Object, typeof (_b = typeof CurrentWeatherComponent_1.CurrentWeatherComponent !== "undefined" && CurrentWeatherComponent_1.CurrentWeatherComponent) === "function" && _b || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b;
//# sourceMappingURL=app.component.js.map