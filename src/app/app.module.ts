import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClarityFundsWidgetComponent } from './clarity-funds-widget/clarity-funds-widget.component';
import { ClarityOrganizationWidgetComponent } from './clarity-organization-widget/clarity-organization-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ClarityFundsWidgetComponent,
    ClarityOrganizationWidgetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
