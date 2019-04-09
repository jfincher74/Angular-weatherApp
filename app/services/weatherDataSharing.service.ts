import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'
// import { Observable } from 'rxjs/Observable'

@Injectable()
export class WeatherDataSharingService {

  public weatherData = new Array([]);

  constructor() {
   
  }

  getData(weatherData:any){
      // console.log(weatherData);
      this.weatherData = weatherData;
      this.checkResults();
  };
  
  checkResults(){
    console.log(this.weatherData)
  }

}