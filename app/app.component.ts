import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './components/CurrentWeather/currentWeather.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ CurrentWeatherComponent ]
  
})
export class AppComponent {
  zip:number;
  
  constructor (
    private currentWeather:CurrentWeatherComponent){};

// TODO : Figure out how to pass "zip" into currentWeather.component and then weather.service
  onSubmit(){
    let zipCode = this.zip;
    console.log(zipCode)
    this.currentWeather.getWeather(zipCode);
  };
}