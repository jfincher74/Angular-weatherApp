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
var ForecastComponent = (function () {
    function ForecastComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.isLoading = new BehaviorSubject_1.BehaviorSubject(true);
    }
    // *** TODO: Make zipcode persist by utilizing NG OnDestroy *** //
    ForecastComponent.prototype.getForecast = function () {
        var _this = this;
        this._weatherService.zipCode = this.zip;
        this._weatherService.getForecast()
            .then(function () {
            _this.weather = _this._weatherService.weather;
        }).then(function () {
            _this.isLoading.next(false);
        });
    };
    return ForecastComponent;
}());
ForecastComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'forecast',
        templateUrl: 'forecast.component.html'
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], ForecastComponent);
exports.ForecastComponent = ForecastComponent;
//# sourceMappingURL=forecast.component.js.map