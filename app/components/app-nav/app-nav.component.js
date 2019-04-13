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
var forecast_component_1 = require("../forecast/forecast.component");
var currentWeather_component_1 = require("../currentWeather/currentWeather.component");
var AppNavComponent = (function () {
    function AppNavComponent(_forecast, _current) {
        this._forecast = _forecast;
        this._current = _current;
    }
    AppNavComponent.prototype.getWeather = function () {
        this._current.getWeather();
    };
    AppNavComponent.prototype.getForecast = function () {
        this._forecast.getForecast();
    };
    return AppNavComponent;
}());
AppNavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-nav',
        templateUrl: 'app-nav.component.html',
        providers: [forecast_component_1.ForecastComponent, currentWeather_component_1.CurrentWeatherComponent]
    }),
    __metadata("design:paramtypes", [forecast_component_1.ForecastComponent,
        currentWeather_component_1.CurrentWeatherComponent])
], AppNavComponent);
exports.AppNavComponent = AppNavComponent;
//# sourceMappingURL=app-nav.component.js.map