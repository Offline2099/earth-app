import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisionContainerComponent } from './division-container/division-container.component';
import { TimelineBoundaryComponent } from './timeline-boundary/timeline-boundary.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisionContainerComponent,
    TimelineBoundaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
