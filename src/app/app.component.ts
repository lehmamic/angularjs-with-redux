import * as angular from 'angular';

export class AppComponent implements angular.IComponentOptions{
    public template: string = `<div>
    <app-counter></app-counter>
</div>`;   
}
