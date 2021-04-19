import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ClarityWidgetComponent } from './clarity-widget/clarity-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ClarityWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
