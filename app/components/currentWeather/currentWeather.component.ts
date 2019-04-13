import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  moduleId: module.id,
  selector: 'current',
  templateUrl: 'currentWeather.component.html',
  providers: [ WeatherService]
})

export class CurrentWeatherComponent {
  zip:number;
  name: string;
  description: string;
  current: number;
  high: number;
  low: number;
  icon: string;

  isLoading:BehaviorSubject<boolean> = new BehaviorSubject(true);
  
constructor (private _weatherService: WeatherService) {   }

  getWeather(){ 
    this._weatherService.zipCode = this.zip;
    this._weatherService.getWeather()
      .then( () => {
        this.name = this._weatherService.weather[0].name
        this.description = this._weatherService.weather[0].weather[0].description
        this.current = this._weatherService.weather[0].main.temp
        this.high = this._weatherService.weather[0].main.temp_max
        this.low = this._weatherService.weather[0].main.temp_min
        this.icon = this._weatherService.weather[0].weather[0].icon
    }).then( () => {console.log(this.name, this.description, this.temp, this.high, this.low, this.icon)
    }).then( () => { this.isLoading.next(false)
    }).then( () => { console.log(this._weatherService.weather
    )}
  }
};