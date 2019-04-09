import { Component,OnInit } from '@angular/core';
import { WeatherDataSharingService } from '../../services/weatherDataSharing.service'



@Component({
  moduleId: module.id,
  selector: 'current',
  templateUrl: 'currentWeather.component.html',
  providers: [ WeatherDataSharingService ]
})

export class CurrentWeatherComponent implements OnInit {
  weatherData = Array([]);
  
constructor (private _weatherDataSharing: WeatherDataSharingService) {}

  ngOnInit() { 
    this.getWeatherData();
  }

  getWeatherData(){
      let data = this._weatherDataSharing.getData(this.weatherData)
      console.log(data);
  }
}
