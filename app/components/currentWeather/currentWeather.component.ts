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
  weather:any;

  isLoading:BehaviorSubject<boolean> = new BehaviorSubject(true);
  
constructor (private _weatherService: WeatherService) {   }

  getWeather(){ 
    this._weatherService.zipCode = this.zip;
    this._weatherService.getWeather()
      .then( () => 
        this.weather = this._weatherService.weather
    ).then( () => this.isLoading.next(false)
    )
  };
}
