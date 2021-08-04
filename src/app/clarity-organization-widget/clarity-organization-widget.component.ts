import * as widget from '@clarity-ai/widget';
import { Component, ElementRef, OnChanges, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clarity-organization-widget',
  templateUrl: './clarity-organization-widget.component.html',
  styleUrls: ['./clarity-organization-widget.component.css'],
})
export class ClarityOrganizationWidgetComponent implements AfterViewInit, OnChanges {

  @ViewChild('ref', { static: false }) widgetComponentRef!: ElementRef;

  widgetOriginDomain = 'https://go.clarity.ai';
  apiToken = '';
  isin = 'US0231351067';
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

  styleJSON = JSON.stringify(this.customizationObject)

  errorCallback(message: any) {
    // you can try some error recovery here of show a message to the user
    console.error(message);
  }

  ngAfterViewInit() {
    widget.load(this.widgetOriginDomain);
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback);
  }

  ngOnChanges(): void {
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback);
  }
}
