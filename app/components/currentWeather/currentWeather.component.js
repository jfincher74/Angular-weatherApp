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
var weather_service_1 = require("../../services/weather.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var CurrentWeatherComponent = (function () {
    function CurrentWeatherComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.isLoading = new BehaviorSubject_1.BehaviorSubject(true);
    }
    CurrentWeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this._weatherService.zipCode = this.zip;
        this._weatherService.getWeather()
            .then(function () {
            _this.name = _this._weatherService.weather[0].name;
            _this.description = _this._weatherService.weather[0].weather[0].description;
            _this.current = _this._weatherService.weather[0].main.temp;
            _this.high = _this._weatherService.weather[0].main.temp_max;
            _this.low = _this._weatherService.weather[0].main.temp_min;
            _this.icon = _this._weatherService.weather[0].weather[0].icon;
        }).then(function () {
            console.log(_this.name, _this.description, _this.temp, _this.high, _this.low, _this.icon);
        }).then(function () {
            _this.isLoading.next(false);
        }).then(function () {
            console.log(_this._weatherService.weather);
        });
    };
    return CurrentWeatherComponent;
}());
CurrentWeatherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'current',
        templateUrl: 'currentWeather.component.html',
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], CurrentWeatherComponent);
exports.CurrentWeatherComponent = CurrentWeatherComponent;
;
//# sourceMappingURL=currentWeather.component.js.map