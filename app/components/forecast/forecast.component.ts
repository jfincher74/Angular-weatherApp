import { Component } from '@angular/core';
import { WeatherDataSharingService } from '../../services/weatherDataSharing.service'

@Component({
  moduleId: module.id,
  selector: 'current',
  templateUrl: 'forecast.component.html'
})

export class ForecastComponent {

  weatherData:any; 
  
  constructor(private data:WeatherDataSharingService) {}

  ngOnInit(){
    this.data.data.subscribe(weatherData => this.weatherData = weatherData)
  }

}