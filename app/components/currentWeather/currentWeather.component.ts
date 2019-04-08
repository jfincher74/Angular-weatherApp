import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../shared/weather';
import { WeatherService } from '../../services/weather.service'

@Component({
  moduleId: module.id,
  selector: 'current',
  templateUrl: 'currentWeather.component.html'
})

export class CurrentWeatherComponent implements OnInit {
  weather:IWeather[];
  errorMessage:string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {this.getWeather()}

  getWeather(){
    this._weatherService.getWeather()
    .subscribe(weather => this.weather = weather,
      error => this.errorMessage = <any>error);
    console.log(this.weather)
  }
  
}