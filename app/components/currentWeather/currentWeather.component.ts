import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  moduleId: module.id,
  selector: 'current',
  templateUrl: 'currentWeather.component.html',
  providers: [ WeatherService ]
})

export class CurrentWeatherComponent implements OnInit {
  weather = Array([]);
  errorMessage = "Whoops"  
  
constructor (private _weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){ 
    this._weatherService.getWeather()
    .subscribe(weather => this.weather = weather,
      error => this.errorMessage = <any>error);
  }
};