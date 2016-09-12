import * as angular from 'angular';
import { createStore, Store, StoreEnhancer } from 'redux';
import { AppComponent } from './app/app.component';
import { CounterComponent } from './app/counter/counter.component';

import { AppState } from './app/shared/app.state';
import { counterReducer } from './app/counter/counter.reducer';

//let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;
let store: Store<AppState> = createStore<AppState>(counterReducer); //, devtools);

var app = angular.module('angularWithReduxApp', []);

app.constant('appStore', store);
app.component("appRoot", new AppComponent());
app.component("appCounter", new CounterComponent());
