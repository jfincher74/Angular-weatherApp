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
var weather_service_1 = require("./services/weather.service");
var weatherDataSharing_service_1 = require("./services/weatherDataSharing.service");
var AppComponent = (function () {
    function AppComponent(_weatherService, _weatherDataSharing) {
        this._weatherService = _weatherService;
        this._weatherDataSharing = _weatherDataSharing;
        this.searchZip = null;
    }
    ;
    AppComponent.prototype.onSubmit = function (searchZip) {
        var _this = this;
        var weather;
        this._weatherService.getWeather(searchZip.value.zip)
            .subscribe(function (data) {
            weather = data;
            _this.weatherData = weather;
            _this.passData();
        });
    };
    ;
    AppComponent.prototype.passData = function () {
        this._weatherDataSharing.getData(this.weatherData);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService,
        weatherDataSharing_service_1.WeatherDataSharingService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map