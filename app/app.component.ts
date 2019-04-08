import { Component } from '@angular/core';
// import { WeatherService } from './services/weather.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // providers: [ WeatherService ]
})
export class AppComponent { 
  // constructor (private _httpService: WeatherService){}
  search:number = null;
  getData:string;

  onClear(){
    this.search = null
  }

  onSubmit(){
    if(this.search < 10000 || this.search > 99999){
      alert('Please enter a 5 Digit Zip Code');
      // this.getWeather();
      // console.log(this.getData);
    } else {
      alert(`You searched for ${this.search}!`)
    }
  }
  // getWeather(){
  //   this._httpService.getWeather()
  //     .subscribe(
  //       data => this.getData = JSON.stringify(data),
  //       error => alert(error),
  //        () => console.log("Finished")
  //     );
  // }
}
