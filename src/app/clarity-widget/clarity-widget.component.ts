import widget from '@clarity-ai/widget';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-clarity-widget',
  templateUrl: './clarity-widget.component.html',
  styleUrls: ['./clarity-widget.component.css']
})
export class ClarityWidgetComponent implements OnChanges {

  @Input() apiToken: string;
  @Input() domain: string;
  
  fund = "LU0147308422"
  containerRef = "clarity-ai-sample-angular-app"
  metricsIds = "ENERGYUSETOTAL, WATER_USE"
  customizationObject = {
    fontFamily: 'Times New Roman',
    // Google fonts can also be used: 
    // gFontFamily: 'Times+New+Roman',
    baseFontSize: '12px',
    fontColor: 'rgb(16, 21, 46)',
    tables: {
      headerBgColor: '#ddd',
      bodyBgColor: '#fff',
      borderColor: '#ddd',
    },
  }
  styleJSON = JSON.stringify(this.customizationObject)

  constructor() { 
    this.apiToken = '';
    this.domain = '';
  }
  
  ngOnChanges(): void {
    widget.load(this.domain);
    widget.refresh()
  }
}
