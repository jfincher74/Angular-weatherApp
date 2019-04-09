import { Component  } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherDataSharingService } from './services/weatherDataSharing.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ WeatherService ]
  
})
export class AppComponent {
  
  weatherData:any;
  searchZip:number = null;
  
  constructor (private _weatherService: WeatherService, 
    private _weatherDataSharing: WeatherDataSharingService) {};

  onSubmit(searchZip:number){
    let weather;
    this._weatherService.getWeather(searchZip.value.zip)
      .subscribe(data => {
        weather = data;
        this.weatherData = weather;
        this.passData();
    });
  };

  passData(){
    this._weatherDataSharing.getData(this.weatherData);

  }
}