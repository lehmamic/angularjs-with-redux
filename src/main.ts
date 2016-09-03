import * as angular from 'angular';
import { AppComponent } from './app/app.component';
import { CounterComponent } from './app/counter/counter.component';

var app = angular.module('angularWithReduxApp', []);

app.component("appRoot", new AppComponent());
app.component("appCounter", new CounterComponent());
