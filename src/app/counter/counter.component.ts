import * as angular from 'angular';
import { Store } from 'redux';
import { AppState } from '../shared/app.state';
import * as CounterActions from './counter-actions-creator';

export class CounterComponent implements angular.IComponentOptions{
    public template: string = `<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <div class="caption">
        <h3>Counter</h3>
        <p>Custom Store</p>

        <p>
          The counter value is:
          <b>{{$ctrl.counter}}</b>
        </p>

        <p>
          <button ng-click="$ctrl.increment()" class="btn btn-primary">
            Increment
          </button>
          <button ng-click="$ctrl.decrement()" class="btn btn-default">
            Decrement
          </button>
        </p>
      </div>
    </div>
  </div>
</div>`; 

    public controller = CounterComponentController;
}

export class CounterComponentController{
    public counter: number = 0;
    
    /*@ngInject*/
    constructor(private appStore: Store<AppState>) {
        this.appStore.subscribe(() => this.readState());
        this.readState();
    }

    public increment(): void {
        this.appStore.dispatch(CounterActions.increment());
    }

    public decrement(): void {
        this.appStore.dispatch(CounterActions.decrement());
    }

    private readState = (()=>  {
        const state = this.appStore.getState();
        this.counter = state.counter;
    });
}
