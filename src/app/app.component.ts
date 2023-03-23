import { Component, OnInit } from '@angular/core';

import { Division, DivisionContainer } from './data/interfaces';
import { Timeline } from './data/timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eons: DivisionContainer[] = [];

  ngOnInit() {
    this.constructDivsisionContainers();
  }

  constructDivsisionContainers(): void {
    this.eons = Timeline.reverse().map(eon => this.constructContainer(eon));
  }

  constructContainer(d: Division): DivisionContainer {
    return {
      type: d.type,
      name: d.name,
      start: d.start,
      end: d.end,
      subdivisions: d.subdivisions,
      description: d.description,
      showSubdivisions: false,
      subdivisionContainers: 
        d.subdivisions.length ? d.subdivisions.reverse().map(s => this.constructContainer(s)) : []
    }
  }
}
