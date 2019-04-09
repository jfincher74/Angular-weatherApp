import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service'

@Component({
  moduleId: module.id,
  selector: 'current',
  templateUrl: 'currentWeather.component.html',
  providers: [WeatherService]
})

export class CurrentWeatherComponent {

  constructor(private _weatherService: WeatherService) {}

  ngOnInit():any { 
    // this.weatherItems = this._weatherService.getWeather(zip:Number);
   }
  
}