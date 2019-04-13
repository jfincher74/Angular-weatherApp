import { Component  } from '@angular/core';
import { ForecastComponent } from '../forecast/forecast.component'
import { CurrentWeatherComponent } from '../currentWeather/currentWeather.component'

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'app-nav.component.html' ,
  providers: [ ForecastComponent, CurrentWeatherComponent ] 
})
export class AppNavComponent {
  
  constructor (public _forecast:ForecastComponent,
    public _current:CurrentWeatherComponent){}

  getWeather(){
    this._current.getWeather();
  }
  
  getForecast(){
    this._forecast.getForecast();
  }


}