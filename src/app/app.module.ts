import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityWidgetComponent } from './clarity-widget/clarity-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ClarityWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
