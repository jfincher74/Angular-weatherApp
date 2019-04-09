import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ WeatherService ],
  
})
export class AppComponent { 
  searchZip:number = null;
  weather:any;
  errorMessage:string;
  
  constructor (private _weatherService: WeatherService) {}  

  onClear(){
    this.searchZip = null
  }

  onSubmit(searchZip:number){
    console.log(searchZip.value.zip);
    this._weatherService.getWeather(searchZip.value.zip)
      .subscribe()
  }
}