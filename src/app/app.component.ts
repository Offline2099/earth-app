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
  reverseState = false;

  ngOnInit() {
    this.constructDivsisionContainers();
  }

  constructDivsisionContainers(): void {
    this.eons = Timeline.map(eon => this.constructContainer(eon));
  }

  constructContainer(d: Division): DivisionContainer {
    return {
      type: d.type,
      name: d.name,
      start: d.start,
      end: d.end,
      subdivisions: d.subdivisions,
      description: d.description,
      image: d.image,
      showSubdivisions: false,
      subdivisionContainers: 
        d.subdivisions.length ? d.subdivisions.map(s => this.constructContainer(s)) : []
    }
  }

  reverseDivsisionContainers(containers: DivisionContainer[]): void {
    containers.reverse();
    containers.forEach(container => this.reverseDivsisionContainers(container.subdivisionContainers));
  }

  setReverseState(state: boolean): void {
    if (this.reverseState != state) {
      this.reverseState = state;
      this.reverseDivsisionContainers(this.eons);
    }
  }

}
