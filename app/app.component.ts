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

  onSubmit(){
    let zipCode = this.zip;
    console.log(zipCode)
    this.currentWeather.getWeather();
  };
}