import { Component  } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ WeatherService ]
  
})
export class AppComponent {
  
  weatherData:any;
  searchZip:number = null;
  
  constructor (
    private _weatherService: WeatherService){};


  // onSubmit(searchZip:number){
  //   let weather;
  //   this._weatherService.getWeather(searchZip)
  //     .subscribe(data => {
  //       weather = data;
  //       this.weatherData = weather;
  //   });
  // };

  onSubmit(){
    let weather;
    this._weatherService.getWeather()
      .subscribe(data => {
        weather = data;
        this.weatherData = weather;
    });
  };
}