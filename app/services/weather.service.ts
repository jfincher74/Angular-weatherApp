import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()

export class WeatherService { 
    constructor(private _http: Http) {}
    zipCode:number;
    weather:Object[];

    getWeather(){
        let zipCode = this.zipCode
        console.log(zipCode)
        return this._http
        .get('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&units=imperial&APPID=46c9391d252f7c41da1198a25720650a')
        .toPromise()
        .then(res => {
            this.weather = [res.json()]
        })
    }
}
