import widget from '@clarity-ai/widget';
import { Component, ElementRef, OnChanges, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clarity-widget',
  templateUrl: './clarity-widget.component.html',
  styleUrls: ['./clarity-widget.component.css']
})
export class ClarityWidgetComponent implements AfterViewInit, OnChanges {

  @ViewChild('ref', { static: false }) widgetComponentRef!: ElementRef;

  widgetOriginDomain = ''
  apiToken = ''
  fund = 'LU0147308422'
  metricsIds = 'ENERGYUSETOTAL, WATER_USE'
  customizationObject = {
    // fontFamily: 'Times New Roman',
    // Google fonts can also be used: 
    // gFontFamily: 'Times+New+Roman',
    baseFontSize: '16px',
    fontColor: 'rgb(16, 21, 46)',
    tables: {
      headerBgColor: '#ddd',
      bodyBgColor: '#fff',
      borderColor: '#ddd',
    },
  }

  styleJSON = JSON.stringify(this.customizationObject)
  
  errorCallback(message: any) {
    // you can try some error recovery here of show a message to the user
    console.error(message)
  }

  ngAfterViewInit() {
    widget.load(this.widgetOriginDomain);
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback);
  }

  ngOnChanges(): void {
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback)
  }
}
