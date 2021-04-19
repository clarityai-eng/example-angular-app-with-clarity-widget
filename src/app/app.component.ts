import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-angular-app-with-clarity-widget';
  config = {
    apiToken: '',
    domain: '',
    fund: '',
    metricsIds: [],
  }
}
