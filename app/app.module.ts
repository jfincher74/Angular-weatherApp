/* Angular Specific */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* My Components */

import { AppComponent }   from './app.component';
import { HomeComponent }   from './components/home/home.component';
import { CurrentWeatherComponent }   from './components/CurrentWeather/currentWeather.component';
import { ForecastComponent }  from './components/forecast/forecast.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'current', component: CurrentWeatherComponent },
                    { path: 'forecast', component: ForecastComponent },
                    { path: '', component: HomeComponent },
                    { path: "**", component: HomeComponent }
                  ])
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  CurrentWeatherComponent,
                  ForecastComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }