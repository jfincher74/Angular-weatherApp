import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// import { IWeather } from '../interface/weather'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {

    constructor(private _http: Http) {}

    getWeather(): Observable<any> {
        return this._http
        .get(`http://api.openweathermap.org/data/2.5/weather?zip=48225,us&units=imperial&APPID=46c9391d252f7c41da1198a25720650a`)
        .map((response:Response) => response.json())
    }
}
