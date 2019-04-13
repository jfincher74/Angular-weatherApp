import { Component  } from '@angular/core';
import { ForecastComponent } from '../components/forecast/ForecastComponent'
import { CurrentWeatherComponent } from '../components/currentweather/CurrentWeatherComponent'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ ForecastComponent, CurrentWeatherComponent ]
  
})
export class AppComponent {
    
  constructor (public _forecast:ForecastComponent,
    _current:CurrentWeatherComponent){}

  getWeather(zip){
    this._current.getWeather();
  }
  
  getForecast(zip){
    this._forecast.getForecast();
  }

}