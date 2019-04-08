import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ WeatherService ]
})
export class AppComponent { 
  search:number = null;

  onClear(){
    this.search = null
  }

  onSubmit(){
    if(this.search < 10000 || this.search > 99999){
      alert('Please enter a 5 Digit Zip Code');
      // this.getWeather();
    } else {
      alert(`You searched for ${this.search}!`)
    }
  }
}
