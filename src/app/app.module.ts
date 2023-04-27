import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DivisionContainerComponent } from './division-container/division-container.component';
import { TimelineBoundaryComponent } from './timeline-boundary/timeline-boundary.component';
import { TimelineButtonComponent } from './timeline-button/timeline-button.component';
import { SidePanelNavBlockComponent } from './side-panel-nav-block/side-panel-nav-block.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisionContainerComponent,
    TimelineBoundaryComponent,
    TimelineButtonComponent,
    SidePanelNavBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
