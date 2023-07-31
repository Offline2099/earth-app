import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';

// Timeline
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TimelineDivisionGroupComponent } from './timeline/timeline-division-group/timeline-division-group.component';
import { TimelineBoundaryComponent } from './timeline/timeline-boundary/timeline-boundary.component';

// Side Panel
import { SidePanelComponent } from './side-panel/side-panel/side-panel.component';
import { SidePanelBlockComponent } from './side-panel/side-panel-block/side-panel-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineDivisionGroupComponent,
    TimelineBoundaryComponent,
    SidePanelComponent,
    SidePanelBlockComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
