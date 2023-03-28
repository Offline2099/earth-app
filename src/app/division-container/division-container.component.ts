import { Component, OnInit, Input } from '@angular/core';

import { DivisionContainer } from '../data/interfaces';

@Component({
  selector: 'app-division-container',
  templateUrl: './division-container.component.html',
  styleUrls: ['./division-container.component.css'],
  host: {
    '[class.subdivisions-displayed]': 'division.showSubdivisions'
  }
})
export class DivisionContainerComponent implements OnInit {

  @Input() containers!: DivisionContainer[];
  @Input() division!: DivisionContainer;
  @Input() reverse: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSubdivisions(containers: DivisionContainer[], divisionName: string): void {

    let division: DivisionContainer | undefined = 
      containers.find(division => division.name == divisionName);

    if (division !== undefined) division.showSubdivisions = !division.showSubdivisions;
    else {
      containers.forEach(division => {
        if (!division.subdivisionContainers.length) return;
        this.toggleSubdivisions(division.subdivisionContainers, divisionName);
      });
    }
  }

}
