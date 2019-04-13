import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  moduleId: module.id,
  selector: 'forecast',
  templateUrl: 'forecast.component.html'
})

export class ForecastComponent {

  constructor(private _weatherService: WeatherService){}

  isLoading:BehaviorSubject<boolean> = new BehaviorSubject(true);
  weather:any;

  getForecast(){
    this._weatherService.zipCode = this.zip;
    this._weatherService.getForecast()
      .then( () => {
        this.weather = this._weatherService.weather
    }).then( () => { this.isLoading.next(false)
    })
  }
}