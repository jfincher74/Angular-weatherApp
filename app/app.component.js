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
var currentWeather_component_1 = require("./components/CurrentWeather/currentWeather.component");
var AppComponent = (function () {
    function AppComponent(currentWeather) {
        this.currentWeather = currentWeather;
    }
    ;
    // TODO : Figure out how to pass "zip" into currentWeather.component and then weather.service
    AppComponent.prototype.onSubmit = function () {
        var zipCode = this.zip;
        console.log(zipCode);
        this.currentWeather.getWeather(zipCode);
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        providers: [currentWeather_component_1.CurrentWeatherComponent]
    }),
    __metadata("design:paramtypes", [currentWeather_component_1.CurrentWeatherComponent])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map