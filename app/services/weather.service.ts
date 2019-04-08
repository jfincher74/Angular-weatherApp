import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IWeather } from '../shared/weather'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {

    constructor(private _http: Http) {}

    getWeather(): Observable<IWeather[]> {
        return this._http
        .get('app/json/dummyWeather.json')
        .map((response:Response) => <IWeather[]>response.json())
    }
}
