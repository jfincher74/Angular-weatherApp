import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  moduleId: module.id,
  selector: 'forecast',
  templateUrl: 'forecast.component.html'
})

export class ForecastComponent {

  isLoading:BehaviorSubject<boolean> = new BehaviorSubject(true);

  getForecast(){
    this.isLoading.next(false)
  }

}