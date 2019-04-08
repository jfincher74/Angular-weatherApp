"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { WeatherService } from './services/weather.service';
var AppComponent = (function () {
    function AppComponent() {
        // constructor (private _httpService: WeatherService){}
        this.search = null;
        // getWeather(){
        //   this._httpService.getWeather()
        //     .subscribe(
        //       data => this.getData = JSON.stringify(data),
        //       error => alert(error),
        //        () => console.log("Finished")
        //     );
        // }
    }
    AppComponent.prototype.onClear = function () {
        this.search = null;
    };
    AppComponent.prototype.onSubmit = function () {
        if (this.search < 10000 || this.search > 99999) {
            alert('Please enter a 5 Digit Zip Code');
        }
        else {
            alert("You searched for " + this.search + "!");
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map