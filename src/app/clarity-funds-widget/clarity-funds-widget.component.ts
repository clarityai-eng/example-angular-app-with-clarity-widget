import * as widget from '@clarity-ai/widget';
import { Component, ElementRef, OnChanges, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clarity-funds-widget',
  templateUrl: './clarity-funds-widget.component.html',
  styleUrls: ['./clarity-funds-widget.component.css'],
})
export class ClarityFundsWidgetComponent implements AfterViewInit, OnChanges {

  @ViewChild('ref', { static: false }) widgetComponentRef!: ElementRef;

  widgetOriginDomain = 'https://go.clarity.ai';
  apiToken = '';
  fund = 'LU0147308422';
  scoresIds = 'ENERGYUSETOTAL, WATER_USE';
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
  };

  styleJSON = JSON.stringify(this.customizationObject);

  errorCallback(message: any) {
    // you can try some error recovery here of show a message to the user
    console.error(message);
  }

  ngAfterViewInit() {
    widget.load(this.widgetOriginDomain);
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback);
  }

  ngOnChanges(): void {
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback)
  }
}
